
/**
 * getContinuousDate('2012-03-12 12:12:12', '2012-04-12 12:12:23', 24 * 3600 * 1000, 'yyyy-MM-dd');
 * @param  {[type]} start     [description]
 * @param  {[type]} end       [description]
 * @param  {[type]} step      [description]
 * @param  {[type]} inFormat  [description]
 * @param  {[type]} outFormat [description]
 * @return {[type]}           [description]
 */
function getContinuousDate(start, end, step, inFormat, outFormat) {
  // (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
  // (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
  function formatDate(date, fmt) {
    date = new Date(date);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
   if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
   }
   for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
   }
  return fmt;
  }

  inFormat = inFormat || 'yyyy-MM-dd';
  outFormat = outFormat || inFormat;
  var continuousDateList = [];
  var startFormatDate = new Date(formatDate(new Date(start), inFormat)).getTime();
  var endFormatDate = new Date(formatDate(new Date(end), inFormat)).getTime();

  while (startFormatDate <= endFormatDate) {
    continuousDateList.push(startFormatDate);
    startFormatDate += step;
  }

  return continuousDateList.map(function(ele) {
    return formatDate(new Date(ele), outFormat || inFormat)
  });
}

console.log(getContinuousDate('2012-03-12 12:12:12', '2012-04-12 12:12:23', 24 * 3600 * 1000 + 1));
