ldclient.once('ready', function() {
    ldclient.variation("your.flag.key", {"key": "user@test.com"}, false,
     function(err, showFeature) {
        if (showFeature) {
          // application code to show the feature
        } else {
          // the code to run if the feature is off
        }
     });
});
