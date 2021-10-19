$(document).ready(function () {
	// Firefox
	if( is_firefox() ) {
		document.body.classList.add('--firefox');
	}

	// Google Chrome
	else if( is_google_chrome() ){
		document.body.classList.add('--chrome');
	}

	else{
		document.body.classList.add('--other');
	}

	//Display the icons
	feather.replace();
});

function is_firefox(){
	if(typeof InstallTrigger !== 'undefined') {
		return true;
	}
	return false;	
}

function is_google_chrome(){
	if(window.chrome !== null && typeof window.chrome !== "undefined") {
		return true;
	}
	return false;
}
