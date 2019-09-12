// document.addEventListener('DOMContentLoaded',
//   // Always sanity check first!
//   // function(event){
//   //   console.log("I'm connected!")
//   // }
// )


$(function() {
    $("[name=toggler]").click(function(){
      $('.toHide').hide();
      console.log($(this).val())
      $('#'+$(this).val()).show('slow');
    });
 });
