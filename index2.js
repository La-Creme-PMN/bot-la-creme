window.onscroll = function() {scroll_button()};

function scroll_button() {
  let breakpoint = 1000;
  if (document.body.scrollTop > breakpoint || document.documentElement.scrollTop > breakpoint) {
    document.getElementById("scroll-button").className = "visible";
  }  else if (document.body.scrollTop < breakpoint || document.documentElement.scrollTop < breakpoint) {
    document.getElementById("scroll-button").className = "not-visible";
  }
}