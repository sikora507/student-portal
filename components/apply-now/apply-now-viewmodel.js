define([
  "knockout",
  "eventEmitter"
], function(ko, emitter) {
  function viewModel() {
    var self = this;
    self.components = ko.observableArray([
      {name: 'Basic info', componentName: 'basic-info'},
      {name: 'Admission', componentName: 'admission'},
      {name: 'High School Info', componentName: 'highschool-info'}
    ]);
    self.selectedSection = ko.observable(self.components()[0]);
    self.selectApplyNowSection = function(component){
      self.selectedSection(component);
    }

    self.goToNextApplyNowStep = function(){
      if(self.canGoToNextStep()){
        let index = getSelectedComponentIndex();
        self.selectedSection(self.components()[index+1]);
      }
    }
    self.goToPrevApplyNowStep = function(){
      if(self.canGoToPrevStep()){
        let index = getSelectedComponentIndex();
        self.selectedSection(self.components()[index-1]);
      }
    }

    self.canGoToNextStep = ko.computed(function(){
      let index = getSelectedComponentIndex();
      if(index < self.components().length -1){
        return true;
      }
      return false;
    });

    self.canGoToPrevStep = ko.computed(function(){
      let index = getSelectedComponentIndex();
      if(index > 0){
        return true;
      }
      return false;
    });

    function getSelectedComponentIndex() {
      let index = self.components().indexOf(self.selectedSection());
      return index;
    }
  }
  instance = new viewModel();
  return function(){return instance;};
});
