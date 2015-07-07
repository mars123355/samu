chrome.app.runtime.onLaunched.addListener(function(launchData){
  chrome.app.window.create(
    '/web/viewer.html',
    {
      id: 'mainWindow',
      bounds: {width: 900, height: 600}
    }
  );
});