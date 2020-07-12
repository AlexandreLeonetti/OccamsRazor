maxInterval = 0 ;
var eliminator = setInterval(()=>{

  var imgs = document.querySelectorAll('img').forEach(function(img){
	   	console.dir(img);
  	img.style.display='none';
	/*this.style.opacity=0;*/
   });
   maxInterval++;
   //console.log(imgs);
   if(maxInterval>30){
	   clearInterval(eliminator);
   }
},200);


