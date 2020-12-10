// http://crbug.com/1079333: registerProtocolHandler() silently fails when
// called from a background page or popup, so we need to open a tab.
chrome.tabs.create({"url": "register.html", "selected": true});
