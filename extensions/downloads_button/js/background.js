chrome.browserAction.onClicked.addListener(function( tab ) {
    chrome.tabs.query({ 'url': 'chrome://downloads/' }, function ( tabs ) {
        for ( var i = 0; i < tabs.length; i++ ) {
            chrome.tabs.update( tabs[ i ].id, {
                'active': true,
            });
            chrome.windows.update( tabs[ i ].windowId, {
                'focused': true,
            });
            return;
        }
        chrome.tabs.create({
            'url': 'chrome://downloads/',
            'windowId': tab.windowId,
        });
    });
});
