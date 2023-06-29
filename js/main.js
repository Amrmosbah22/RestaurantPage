window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "2px 0px";
      document.getElementById("logo").style.display = "none";
      document.getElementById("navbar").style.backgroundColor = "rgba(67, 62, 55, 0.452)";
      document.getElementById("active").style.border = "none";
    } else {
      document.getElementById("navbar").style.padding = "0";
      document.getElementById("navbar").style.backgroundColor = 'transparent';
      document.getElementById("active").style.borderTop = "2px solid var(--main-color)" ;
    }
}