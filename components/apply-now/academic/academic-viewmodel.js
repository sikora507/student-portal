define(["knockout"], function(ko) {
  function viewModel() {
    var self = this;
    self.isActive = ko.observable(true);
    self.testData = ko.observable("test data");
    self.academicLevels = ko.observableArray([
      {name: 'Select One', value: null},
      {name: 'Graduate', value: 'graduate'},
      {name: 'Undergraduate', value: 'undergraduate'},
    ]);
    self.selectedAcademicLevel = ko.observable(null);
  }
  var instance = new viewModel();
  return function(){return instance;};
});
