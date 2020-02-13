//clickhandler
$("button").click(function(){
   let comment= $("input").val();
    
   $(".messages").append(comment);
   alert("we are the knights who say ni!!!");
   });