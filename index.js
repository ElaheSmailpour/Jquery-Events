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
   },2000)
   
   //*********++++++++++*/
   /*
$('#change').change(function(e){
    var selected=$('#change :selected').text();
    var text=e.type;

    $('#secondInput').val(selected);
})
   
})
*/

//*********++++++++++*/
/*
$('#firstInput').select(function(e){
    
    var text=e.type;

    $('#secondInput').val(text);
})

    
 })
*/
 //*********++++++++++*/
$('#form').submit(function(e){
 
var text= $('#firstInput').val();
   if(text==="Eli"){
       return;
   }
   else{
    e.preventDefault();
   }
})

    
 })
 
})