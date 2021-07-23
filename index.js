$(document).ready(function(){
    /*
     debugger;
     $('#firstInput').keydown(function(e){
       var text=$('#firstInput').val();
         $('#secondInput').val(text);
     })
 */
 //++++++++++++++++++++++++++++
 /*
     debugger;
     $('#firstInput').keyup(function(e){
       var text=$('#firstInput').val();
         $('#secondInput').val(text);
     })
 */
 
  //++++++++++++++++++++++++++++
/*
     $('#firstInput').keypress(function(e){
       var text=$('#firstInput').val();
         $('#secondInput').val(text);
         console.log("type=",e.type)
     })
     */
 //++++++++++++++++++++++++++++
 $('#firstInput').keypress(function(e){
   
      $('#text-typing').text("typing...");
     
  });
  $('#firstInput').keyup(function(e){
   setInterval(function(){
    $('#text-typing').text("");
   },1000)
   
   
})

    
 })
 