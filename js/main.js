// const { event } = require("jquery");

$(document).ready(function() {

  $(".search__btn").click(function() {
    $(".search__pop-up").fadeIn();
  });
  $(".pop-up__close").click(function() {
    $(".search__pop-up").fadeOut();
  });


  $(".actions__account-btn").click(function() {
      $(".actions__pop-up").fadeIn();
  });
  $(".pop-up__close").click(function() {
      $(".actions__pop-up").fadeOut();
  });

  $('.burger-menu').click(function () {
    $(this).toggleClass('active');
    $('.navigation').toggleClass('active');
  });

  
  function moveActionsElement() {
    if (window.matchMedia('(max-width: 740px)').matches) {
        $('.actions').appendTo('.header__nav');
    } else {
        $('.actions').appendTo('.header__top');
    }
  }
  
  moveActionsElement();
  
  $(window).resize(function(){
      moveActionsElement();
  });


  document.querySelectorAll('.off-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var tooltip = this.querySelector('.tooltip');
        var allTooltips = document.querySelectorAll('.tooltip');

        if (tooltip.style.visibility !== 'visible') {
            allTooltips.forEach(function(tooltip) {
                tooltip.style.visibility = 'hidden';
            });

            tooltip.style.visibility = 'visible';
            
            setTimeout(function() {
                tooltip.style.visibility = 'hidden';
            }, 1000);
        } else {
            tooltip.style.visibility = 'hidden';
        }
    });
  });

  $('.filter-box__btn').click(function() {
    var currentFilterBox = $(this).closest('.filter-box');
    var otherFilterBoxes = $('.filter-box').not(currentFilterBox);
    
    otherFilterBoxes.removeClass('active');
    otherFilterBoxes.find('.filter-list').hide();
    
    currentFilterBox.toggleClass('active');
    currentFilterBox.find('.filter-list').toggle();
  });


});
