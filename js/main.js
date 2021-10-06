
const google_play_url = "#";
const firefox_extension_url = "#";


$(document).ready(function () {

	var add_alby_btn_header = document.getElementById("add_alby_btn_header");
	var add_alby_btn = document.getElementById("add_alby_btn");

	// Firefox
	// if( is_firefox() ) {
	// 	add_alby_btn_header.innerHTML = '<a href="'+firefox_extension_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Firefox</b></a>';
	// 	add_alby_btn.innerHTML = '<a href="'+firefox_extension_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><img src="images/browsers/firefox-icon.png" style="max-height: 32px;"/><b> Add to Firefox</b></a>';
	// }

	// Google Chrome
	// if( is_google_chrome() ){
		add_alby_btn_header.innerHTML = '<a href="'+google_play_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Chrome</b></a>';
		add_alby_btn.innerHTML = '<a href="'+google_play_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><img src="images/browsers/google-icon.png" style="max-height: 32px;"/><b> Add to Chrome</b></a>';
	// }
	

	//Display the icones
	feather.replace();

});




// function is_firefox(){
// 	if( typeof InstallTrigger !== 'undefined' ) {
// 		return true;
// 	}
// 	return false;	
// }


// function is_google_chrome(){
// 	if( !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime) ) {
// 		return true;
// 	}
// 	return false;	
// }