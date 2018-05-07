function createXHR() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    const versions = ['MSXML2.XMLHTTP', 'MSXML2.XMLHTTP3.0', 'MSXML2.XMLHTTP6.0'];
    let xhr = null;
    for (let i = 0; i < versions.length; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch(err) {

      }
    }
    return xhr;
  } else {
    throw new Error("No XHR object available");
  }
}

let xhr = createXHR();
xhr.responseTyep = 'json';
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log('success=', xhr.responseText);
  }
}
xhr.onload = function() {
  // console.log('onload=', xhr.responseText);
}
xhr.onerror = function(e) {
  console.error('onerror=', e);
}
const URL = '/project/index';
xhr.open('POST', URL, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //Post
xhr.send('foo=bar&name=lushijie'); // send formData
