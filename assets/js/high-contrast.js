<script type="text/javascript">
var hc = false;
var link = document.createElement("link");

// set properties of link tag
link.href = "https://sd.olliepalmer.com/assets/css/highcontrast.css";
link.rel = "stylesheet";
link.type = "text/css";

// Loaded successfully
link.onload = function () {
  console.log("success");
};

// Loading failed
link.onerror = function () {
  console.log("error");
};

// append link element to html
function highContrast() {
  hc = !hc;
  if (hc) document.body.appendChild(link);
  if (!hc) document.querySelector('link[href$="https://sd.olliepalmer.com/assets/css/highcontrast.css"]').remove();
}


document.getElementsByTagName("footer")[0].innerHTML = "<a onclick='highContrast()'>Enable high contrast mode?</a>";

</script>
