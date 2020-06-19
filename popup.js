
//let Activate = document.getElementById("mailButton");

//alert("ok");
/*
let {ActivateVal} = browser.storage.local.get('ActivateValue');
	if ({ActivateVal} != 'undefined'){

			browser.storage.local.get('ActivateValue').then(result => {

			let x = result.ActivateValue;
			if (x == 0){

				document.getElementById("status").innerText="Disabled";
				//setActivateValue(1);
			
			}else{

				document.getElementById("status").innerText="Enabled";
				//setActivateValue(0);
			
			}
	});
}else{console.log({ActivateVal} )}

async function setActivateValue(a) {
	await browser.storage.local.set({"ActivateValue" : a});

}



//	setActivateValue(0);

async function init() {
	let {ActivateValue} = browser.storage.local.get('ActivateValue');
	if ({ActivateValue} == 'undefined'){
	

	setActivateValue(0);
	document.getElementById("status").innerText="Disabled";
	//alert("initiated at zero");
	//alert(0);
}
}

init().catch(e => console.error(e));



  document.addEventListener("click", (e) => {
 
	 
    if (e.target.classList.contains("mailButton")) {
    		browser.storage.local.get('ActivateValue').then(result => {

			let x = result.ActivateValue;
			if (x == 0){
				
				setActivateValue(1);
					document.getElementById("status").innerText="Enabled";
				browser.storage.local.get('ActivateValue').then(result => {
					let x = result.ActivateValue;
					//	alert(x);
						console.log("clicked");
						console.log(result.ActivateValue);					
				});

			}else if (x == 1){
		
				setActivateValue(0);
					document.getElementById("status").innerText="Disabled";
				browser.storage.local.get('ActivateValue').then(result => {
					let x = result.ActivateValue;
					//alert(x);		
						console.log("clicked");
						console.log(result.ActivateValue);					
				});

			}else{
				console.log("x");
				console.log(x);
				setActivateValue(0);
			}
	});
    }
  });

*/