define(["external/knockout-3.5.0"], function(ko) {
  function viewModel() {
    var self = this;
    self.testData = ko.observable("test data");
    self.isActive = ko.observable(false);
  }
  var instance = new viewModel();
  return function(){return instance;};
});
