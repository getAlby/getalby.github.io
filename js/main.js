
const firefox_extension_url = "#";
const opera_addons_store_url = "#";
const brave_addons_store_url = "#";
const google_play_url = "#";
const safari_addons_store_url = "#";
const edge_addons_store_url = "#";

const github_url = "https://github.com/getAlby/lightning-browser-extension#try-out-the-most-recent-version";


$(document).ready(function () {

	var add_alby_btn_header = document.getElementById("add_alby_btn_header");
	var add_alby_btn = document.getElementById("add_alby_btn");


	// The Safari detection must stay after the Google Chrome detection.
	// The Opera detection must stay before the Google Chrome detection.

	// Firefox
	if( is_firefox() ) {
		add_alby_btn_header.innerHTML = '<a href="'+firefox_extension_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Firefox</b></a>';
		add_alby_btn.innerHTML = '<a href="'+firefox_extension_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><div class="row"><div class="col px-1"><img src="images/browsers/firefox-icon.svg" class="browser-icon" alt="Firefox" title="Firefox"/></div><div class="col-auto"><b> Add to Firefox</b></div></div></a>';
	}

	// Opera
	else if( is_opera() ){
		add_alby_btn_header.innerHTML = '<a href="'+opera_addons_store_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Opera</b></a>';
		add_alby_btn.innerHTML = '<a href="'+opera_addons_store_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><div class="row"><div class="col px-1"><img src="images/browsers/opera-icon.svg" class="browser-icon" alt="Opera" title="Opera"/></div><div class="col-auto"><b> Add to Opera</b></div></div></a>';	
	}

	// Brave
	else if( is_brave() ){
		add_alby_btn_header.innerHTML = '<a href="'+brave_addons_store_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Brave</b></a>';
		add_alby_btn.innerHTML = '<a href="'+brave_addons_store_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><div class="row"><div class="col px-1"><img src="images/browsers/brave-icon.png" class="browser-icon" alt="Brave" title="Brave"/></div><div class="col-auto"><b> Add to Brave</b></div></div></a>';	
	}

	// Google Chrome
	else if( is_google_chrome() ){
		add_alby_btn_header.innerHTML = '<a href="'+google_play_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Chrome</b></a>';
		add_alby_btn.innerHTML = '<a href="'+google_play_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><div class="row"><div class="col px-1"><img src="images/browsers/google-icon.svg" class="browser-icon" alt="Google Chrome" title="Google Chrome"/></div><div class="col-auto"><b> Add to Chrome</b></div></div></a>';
	}

	// Safari
	else if( is_safari() ){
		add_alby_btn_header.innerHTML = '<a href="'+safari_addons_store_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Safari</b></a>';
		add_alby_btn.innerHTML = '<a href="'+safari_addons_store_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><div class="row"><div class="col px-1"><img src="images/browsers/safari-icon.svg" class="browser-icon" alt="Safari" title="Safari"/></div><div class="col-auto"><b> Add to Safari</b></div></div></a>';	
	}

	// Edge
	else if( is_edge() ){
		add_alby_btn_header.innerHTML = '<a href="'+edge_addons_store_url+'" class="btn btn-outline-dark bg-white rounded-pill px-4 my-4"><b>Add to Edge</b></a>';
		add_alby_btn.innerHTML = '<a href="'+edge_addons_store_url+'" class="btn btn-outline-dark bg-white btn-lg rounded-pill"><div class="row"><div class="col px-1"><img src="images/browsers/edge-icon.svg" class="browser-icon" alt="Edge" title="Edge"/></div><div class="col-auto"><b> Add to Edge</b></div></div></a>';	
	}

	else{
		add_alby_btn.innerHTML = 'Available on Chrome, Safara, Firefox, Edge, Opera and Brave';
	}

	//Display the icones
	feather.replace();

});




function is_firefox(){
	if( typeof InstallTrigger !== 'undefined' ) {
		return true;
	}
	return false;	
}

function is_opera(){
	if( (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 ){
		return true;
	}
	return false;
}

function is_google_chrome(){
	if( window.chrome !== null && typeof window.chrome !== "undefined" ) {
		return true;
	}
	return false;
}

function is_brave(){
	if( window.navigator.brave != undefined && window.navigator.brave.isBrave.name == "isBrave"){
		return true;
	}
	return false;
}

function is_safari(){
	if( navigator.userAgent.indexOf("Safari") > -1 ){
		return true;
	}
	return false;
}

function is_edge(){
	if( !!window.StyleMedia ){
		return true;
	}
	return false;
}




