requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: "/js",
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    components: "/components"
  }
});

require([
  "external/knockout-3.5.0",
  "appViewModel",
  "external/domReady!",
  "registerComponents"
], function(ko, appViewModel) {
  ko.applyBindings(new appViewModel());
});
