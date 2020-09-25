<script type="text/javascript">
// so you like looking at javascript sources?
// this is mildly adapted from this codepen here ==> https://codepen.io/Danielgroen/pen/VeRPOq
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Scripted Design","Scripted Design","Scripted Design"];

  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".site-header .lh-tight").innerHTML = text.substring(0, i+1);

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 10000);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

</script>
