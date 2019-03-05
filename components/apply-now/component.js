define([
  "external/knockout-3.5.0",
  "components/apply-now/basic-info/component",
  "components/apply-now/admission/component",
  "components/apply-now/highschool-info/component"
], function(ko, basicInfo, admission, highschoolInfo) {
  function viewModel() {
    var self = this;
    self.components = [
      {name: 'Basic info', viewModel: basicInfo()},
      {name: 'Admission', viewModel: admission()},
      {name: 'High School Info', viewModel: highschoolInfo()}
    ]
    self.applyNowStage = ko.observable(null);
  }
  instance = new viewModel();
  return function(){return instance;};
});
