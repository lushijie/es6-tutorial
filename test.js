/*
* @Author: lushijie
* @Date:   2018-02-09 11:06:54
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 15:28:13
*/

// sudo scp -r  lushijie@10.16.59.72:/home/zhang.jing/data/upload_img_md5.log-20180209  /Users/lushijie/Downloads
const libqqwry = require('lib-qqwry');
const readline = require('readline');
const qqwry = libqqwry.init()
const path = require('path');
const fs = require('fs');
const filepath = path.join("/Users/lushijie/Downloads/upload_img_md5.log-20180210");
const input = fs.createReadStream(filepath);

const rl = readline.createInterface({
  input: input
});

let num = 0;
const output = '';

function getFieldValue(lineLog, field) {
  let lineContent = lineLog.split(/\s+/);
  let resp = {};
  lineContent.forEach(function(ele, index) {
    let splitString = '=';
    let fieldKey = '';
    if (ele.indexOf('url=') > -1) {
      splitString = 'url=';
      fieldKey = 'url';
    }
    if (ele.indexOf('res=') > -1) {
      splitString = 'res=';
      fieldKey = 'res';
    }
    if (ele.indexOf(splitString) > -1) {
      fieldKey = fieldKey || ele.split(splitString)[0];
      resp[fieldKey] = ele.split(splitString)[1];
    }
  });
  return (field ? resp[field] : resp)
}

function getIpInfo(ip) {
  let ipInfo = qqwry.searchIP(ip)
  return ipInfo.Country + ipInfo.Area;
}

rl.on('line', (line) => {
  if (line) {
    let ip = getFieldValue(line, 'ip');

    let ipAddress = ip && getIpInfo(ip);
    let qid = getFieldValue(line, 'qid');
    let res = getFieldValue(line, 'res');
    let src = getFieldValue(line, 'src');
    let url = getFieldValue(line, 'url');
    let agent = (/user_agent=(.+)file_info=/.exec(line)||[])[1];
    let reg1 = /file_name":"(.+?)"/;
    let reg2 = /type":"(.+)"/;
    let clientMd5 = getFieldValue(line, 'client_md5').split('__')[0];
    let fileMd5 = getFieldValue(line, 'file_md5').split('__')[0];

    if (clientMd5 !== fileMd5) {
      num++;
      let fileType = '';
      if (src === 'identity') {
        fileType = reg1.exec(res)[1].split('.')[1];
      } else {
        fileType = reg2.exec(res)[1];
      }
      console.log(clientMd5, qid, src, fileType, ipAddress/*, agent*/);
    }
  }

});
rl.on('close', (line) => {
  // console.log("读取完毕！");
  console.log(num);
});

