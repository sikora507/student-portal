define(['knockout'], function(ko, emitter){
    function viewModel() {
        var self = this;
        self.setActiveMenuItem = function(componentName){
            self.selectedMenuItem(componentName);
        }
        self.selectedMenuItem= ko.observable('home-page');

    }
    vm = new viewModel();
    return function(){return viewModel;};
});