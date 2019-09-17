Package.describe({
  name: "perak:camera",
  summary: "Same as mdg:camera but fixed error with stream.stop (which is deprecated in Chrome)",
  version: "1.0.1",
  git: "https://github.com/perak/meteor-camera"
});

Cordova.depends({
  "cordova-plugin-camera": "1.2.0"
});

Package.onUse(function(api) {
  api.export('MeteorCamera');
  api.use(["templating", "session", "ui", "blaze", "less@1.0.0||2.0.0", "reactive-var"]);
  api.versionsFrom("METEOR@1.2");
  api.use("isobuild:cordova@5.2.0");

  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.less", ["web.browser"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
});
