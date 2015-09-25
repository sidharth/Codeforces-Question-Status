chrome.browserAction.onClicked.addListener(function(tab) {
	// Get URL of current tab
	var currentURL = tab.url; 
	var matchPrefix = "http://codeforces.com/problemset/problem/";

	if (currentURL.indexOf(matchPrefix)==0){
		var extras = currentURL.substring(matchPrefix.length);
		var problem = extras.split('/');
		var newURL = "http://codeforces.com/problemset/status/"+problem[0]+"/problem/"+problem[1];

		console.log('Current tab URL : ' + currentURL);
		console.log('Extras : ' + extras);
		console.log('NewURL :' + newURL);

		chrome.tabs.create( {url:newURL} );
	}
});
