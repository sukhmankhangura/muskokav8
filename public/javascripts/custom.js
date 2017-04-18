$('.confirmation').on('click', function () {
    return confirm('Are you sure you want to delete this?');
});

// var i=0;
// $('.camper').each(function(){
//     i++;
//     var newID='camper'+i;
//     $(this).attr('id',newID);
//     $(this).val(i);
//
//     // $("#hide").click(function(){
//     //     $('#camper[i]').hide();
//     // });
// });
//
// $(document).ready(function () {
//   $('.camperRow').on('click', function () {
//       $(this).toggleClass('hide')
//
//   });
// });


$(document).ready(function () {
    var $tournament = $('.camperRow'); // keep reference on element
    // if already data set in localstorage for this element,
    // set HTML element

    $('.camperRow').on('click', function () {
      $(this).toggleClass('hide');

    if(localStorage.getItem('.camperRow')) {
        $tournament.hide(localStorage.getItem('.camperRow'));
    }


    //     // once element HTML updated, keep it in localstorage
      // localStorage.setItem('.camperRow', $tournament.hide());
  localStorage.setItem(this);
    });
});
