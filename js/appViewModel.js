// Main viewmodel class
define(["external/knockout-3.5.0"], function(ko) {
  return function appViewModel() {
    this.contentComponent = ko.observable("main");
    this.setContent = function(contentComponent) {
      this.contentComponent(contentComponent);
    };
  };
});
