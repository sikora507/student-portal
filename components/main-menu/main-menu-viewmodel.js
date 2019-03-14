define(['knockout', 'message-bus'], function(ko, messageBus){
    function viewModel() {
        var self = this;
        self.setActiveMenuItem = function(componentName){
            self.selectedMenuItem(componentName);
        }
        self.selectedMenuItem = ko.observable('home-page');
        
        self.selectedMenuItem.subscribe(function(newValue){
            messageBus.sendEvent('menu-item-changed', newValue)
        });
    }
    vm = new viewModel();
    return function(){return viewModel;};
});