/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Fakebook

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'

const select = document.querySelector('.fa');
const input = document.querySelector('.input');
const file = document.querySelector('.image');
const post = document.querySelector('.post');

/* -----------------------------------*/
/* File Input                         */
/* -----------------------------------*/

// Use $ identifier to apply shortcut to the function. 
$(select).click(function fileSelect() {
    $("input[type='file']").trigger('click');
  });
  
  $('input[type="file"]').on('change', function() {
    let val = $(this).val();
    $(this).siblings('span').text(val);
})
