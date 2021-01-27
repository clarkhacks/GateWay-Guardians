function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function regit(){
  var input = document.getElementById("input").value;
  var onlyNum = input.replace(/[^0-9\n]/g, '');
  var noSpace = onlyNum.replace(/\n\n/g, '\n');
  var noSpace2 = noSpace.replace(/\n\n/g, '\n');
  var noSpace3 = noSpace2.replace(/\n\n/g, '\n');
  var noSpace4 = noSpace3.replace(/\n\n/g, '\n');
  var noSpace5 = noSpace4.replace(/\n\n/g, '\n');
  download("hello.txt", noSpace5);
}