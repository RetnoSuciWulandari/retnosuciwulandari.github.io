//Alert avatar
$(document).ready(function(){
    $("#avatar").click(function(){
        alert("Retno has just said hello to you!");
    });
});

//Certificates
$('.display-photos').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});


//Modal CV
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal 
var img = document.getElementById('myCV');
var modalImg = document.getElementById("imgCV");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


//Offset navigation
function openNav() {
    document.getElementById("offset-nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("offset-nav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


//Hamburger menu
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('.hamburgermenu ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('.hamburgermenu ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

