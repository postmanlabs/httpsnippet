var data = new FormData();
data.append("foo", "Hello World");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://mockbin.com/har");

xhr.send(data);
