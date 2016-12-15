const objToParams = function (obj) {
  let list = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      list.push(`${key}=${obj[key]}`);
    }
  }
  return list.join('&');
}

const zAJAX = function (url, datas, func) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(objToParams(datas));
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      func(JSON.parse(xmlhttp.responseText));
    }
  }
}

export default zAJAX