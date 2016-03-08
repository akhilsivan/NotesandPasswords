
/* JavaScript content from js/main.js in folder common */
var busyIndicator = null;
function wlCommonInit(){
	alert("1");
	busyIndicator = new WL.BusyIndicator();
	loadAdapter();
}
function loadAdapter(){
	alert("loadadapter");
     var invocationData={
				adapter : 'Notesadapter',
				procedure : 'getStories',
				procedure : 'getStoriesFiltered'
				
			};
     invocationOptions={
				onSuccess : loadFeedsSuccess,
				onFailure: loadFeedsFailure,
			};
    WL.Client.invokeProcedure(invocationData,invocationOptions);
	function loadFeedsSuccess(result){
		alert("2");

	WL.Logger.debug("Feed retrive success");
	if (result.invocationResult.Items.length>0) {
		alert("3");
		displayFeeds(result.invocationResult.Items);
	}
	else{
		alert("4");
		loadFeedsFailure();}
	}
	function loadFeedsFailure(result){
		WL.Logger.debug("Feed retrive failed");	
    }
}	
function displayFeeds(items){
	alert("5");
	var ul = $('#itemsList');
	for (var i = 0; i < items.length; i++) {
		var li = $('<li/>').html(items[i].title);
		var pubDate = $('<div/>', {
			'class': 'pubDate'
		}).html(items[i].pubDate);
		li.append(pubDate);		
		ul.append(li);
	}
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}