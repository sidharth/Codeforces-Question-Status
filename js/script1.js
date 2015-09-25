/*

AUTHOR : Sidharth Raja
CREATED : 2015

Chrome Extension for quickly opening active Problem Submissions

*/

chrome.browserAction.onClicked.addListener(function(tab) {
	// Get URL of current tab
	var currentURL = tab.url; 

	// Standard problemset prefix
	var matchPrefix = "http://codeforces.com/problemset/problem/";

	// Check if currentURL is a valid problemset question
	if (currentURL.indexOf(matchPrefix)==0){

		// Store problem parameters in problem array=> (CONTEST_NUMBER,PROBLEM_NUMBER)
		var extras = currentURL.substring(matchPrefix.length);
		var problem = extras.split('/');

		// Construct new URL
		var newURL = "http://codeforces.com/problemset/status/"+problem[0]+"/problem/"+problem[1];

		console.log('Current tab URL : ' + currentURL);
		console.log('Extras : ' + extras);
		console.log('NewURL :' + newURL);

		// Open New URL in new tab
		chrome.tabs.create( {url:newURL} );
	}
});
