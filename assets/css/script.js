$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          1000,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });

  


   


$(document).scroll( function(e){
    const y = $("html").scrollTop();
    if(y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})