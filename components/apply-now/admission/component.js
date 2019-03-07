define(["knockout"], function(ko) {
  function viewModel() {
    var self = this;
    self.isActive = ko.observable(true);
    self.testData = ko.observable("test data");
  }
  var instance = new viewModel();
  return function(){return instance;};
});
