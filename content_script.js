

function checker() {
		var element = document.createElement('style'),
	sheet;

// Append style element to head
document.head.appendChild(element);

// Reference to the stylesheet
sheet = element.sheet;
var styles = '.noafter{';
styles += 'content:none !important;';
styles += 'background:white !important;';
styles += '}';
styles = '.noafter{';
styles += 'content:none !important;';
styles += 'background:white !important;';
styles += '}';
styles = 'ytd-video-masthead-ad-advertiser-info-renderer{';
styles += 'content:none !important;';
styles += 'background:green !important;';
styles += '}';
styles = '*{';
styles += 'background-image:green !important;';
styles += '}';

//try remove background image everywhere.


// Add the first CSS rule to the stylesheet
sheet.insertRule(styles, 0);

    setInterval(function(){ 
				
						//console.log(result);
						if(1){

							//===========================================
							let aTag = Array.from(document.getElementsByTagName('img')).map(result => {
						console.log(aTag);
							return 	result.setAttribute('style', 'opacity:0 !important');
									//return result.style.opacity = 0 ;
								
							});
							let divTag = Array.from(document.getElementsByTagName('main')).map(result => {
						
	
							return result.classList.add('noafter');
									//return result.style.opacity = 0 ;
								
							});
							
							

		

						}else{
							//console.log("else 1");

					}
				
	}, 200);
}

checker();


