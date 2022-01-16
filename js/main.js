import * as Burger from './modules/burger.js';
import * as Modal from './modules/modal.js';
import * as Scroll from './modules/scroll.js';



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dotsEach:true,
        loop:true
    });
  });