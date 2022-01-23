<script language="javascript">
var default_color;
function mouseIn() {
  default_color = document.changecolorbutton.but.style.background;
  document.changecolorbutton.but.style.background = "green";
}
function mouseOut() {
  document.changecolorbutton.but.style.background = default_color;
}
</script>


<script type="text/javascript">
  function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalWatch()", 1000);
  }
</script>