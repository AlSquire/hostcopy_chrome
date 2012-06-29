// Get Chrome current tab
// From http://stackoverflow.com/questions/2797853/get-url-and-save-it-chrome-extension
window.addEventListener("load", windowLoaded, false);
function windowLoaded() {
  chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('current_uri').value = tab.url;
    document.getElementById('current_host').value = getLocation(tab.url).hostname;
    document.getElementById('current_host').focus();
    document.getElementById('current_host').select();
  });
}
// Parse the hostname from an uri using tricky javascript technology
// From http://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript
var getLocation = function(href) {
  var l = document.createElement("a");
  l.href = href;
  return l;
};