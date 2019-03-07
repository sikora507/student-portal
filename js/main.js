requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: "/js",
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    components: "/components",
    knockout: "/js/external/knockout-3.5.0",
    text: "/js/external/text",
    domReady: "/js/external/domReady"
  }
});

require([
  "knockout",
  "app-viewmodel",
  "domReady!",
  "register-components",
  "register-bindings"
], function(ko, appViewModel) {
  ko.applyBindings(new appViewModel());
});
