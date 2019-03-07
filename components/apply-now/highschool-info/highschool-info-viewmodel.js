define(["knockout", 'components/apply-now/academic/academic-viewmodel'], function(ko, academicVm) {
  function viewModel() {
    var self = this;
    self.testData = ko.observable("test data");
    self.isVisible = ko.computed(function(){
      return academicVm().selectedAcademicLevel() != 'undergraduate';
    });
  }
  var instance = new viewModel();
  return function(){return instance;};
});
