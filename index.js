$(document).ready(function(){
    /*
     debugger;
     $('#firstInput').keydown(function(e){
       var text=$('#firstInput').val();
         $('#secondInput').val(text);
     })
 */
 /*
     debugger;
     $('#firstInput').keyup(function(e){
       var text=$('#firstInput').val();
         $('#secondInput').val(text);
     })
 */
 
    // debugger;
     $('#firstInput').keypress(function(e){
       var text=$('#firstInput').val();
         $('#secondInput').val(text);
         console.log("type=",e.type)
     })
 
    
 })
 