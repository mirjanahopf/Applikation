$( "#btn1" ).bind( "click", function(event, ui) {
    alert("Speak")
    TTS.speak({
        text: 'hello, world!',
        locale: 'en-GB',
        rate: 0.75
    }, function () {
        alert('success');
    }, function (reason) {
        alert(reason);
    });
  });

  count= 0;
  let posxx; //Mouse im Canvas
  let posyy; //Mouse im Canvas

  $("#myCanvas").bind("click", function(event, ui) {
     let posx = event.clientX;
     let posy = event.clientY;

     //alert("touched "+posx +" "+posy);
     var c = document.getElementById("myCanvas");
     let dim = c.getBoundingClientRect();
     posxx = event.clientX - dim.left;
     posyy = event.clientY - dim.top;


     //alert("Canvas "+c.width +" "+c.height);
     var image = new Image();
     image.src = 'img/ball.png';
     var cont = c.getContext("2d");
     cont.drawImage(image,posxx,posyy);

     var myVar = setInterval(myTimer, 1000);
 });

 function myTimer() {
     var d = new Date();
     document.getElementById("zeit").innerHTML = d.toLocaleTimeString();
     //alert("touched "+posx +" "+posy);
     var c = document.getElementById("myCanvas");

     //alert("Canvas "+c.width +" "+c.height);
     var image = new Image();
     image.src = 'img/ball.png';
     var cont = c.getContext("2d");
     cont.drawImage(image,posxx+count,posyy+count);
     count=count+3;

};
