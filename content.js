function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

let sign = prompt("Would you like to export or import data? type i for import and e for export. leave blank if you dont wanna proceed. (created by JelloFile)");

if (sign.toLowerCase() === "e") {
download("infinite-craft-data.json", localStorage.getItem("infinite-craft-data");
}




