function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

let sign = prompt("Would you like to export or import data? type i for import and e for export. leave blank if you dont wanna proceed. (created by JelloFile)");

if (sign.toLowerCase() === "e") {
download("infinite-craft-data.json", localStorage.getItem("infinite-craft-data"));
  location.reload()
}
if (sign.toLowerCase() === "i") {
document.querySelector("html").innerHTML = `<div id='h1'><h1> As soon as you upload your file, we will redirect you back to the game.</h1>
<p>remember, this file WILL overwrite EVERY SINGLE thing you have on the current file. We recommend you export it before you do this.</p>
<input type="file" id="file-input" onchange="handleFileSelect()"></div>
<script>
function reloadNow(){
location.reload();
};
function handleFileSelect(){
    const input = document.getElementById('file-input');
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const contents = reader.result;
      console.log(contents);
      localStorage.setItem("infinite-craft-data", contents);
      document.getElementById("h1").innerHTML = "Give us 10 seconds...";
     setTimeout(reloadNow, 10000)
     
    };
   reader.readAsText(file);
  }</script><style>html,body{text-align:center;}</style>`
};





