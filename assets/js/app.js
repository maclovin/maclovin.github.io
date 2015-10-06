'use strict';

(function($, window, document) {
  var animations = function() {
    $('.pixel-avatar')
      .animate({'bottom': '-10px'}, 2000)
      .animate({'bottom': '0px'}, 2000, animations);

    $('h1').fadeIn(1000);
  }

  animations();


})(window.jQuery, window, document);
