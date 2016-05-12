define('ViewModel', ['knockout', 'EntityNavigationViewModel'], function (ko, EntityNavigationViewModel) {
    return function ViewModel() {
        self = this;

        self.entityNavigator = EntityNavigationViewModel.getSingleton();
        self.userName = ko.observable(self.entityNavigator.currentEntity().displayName);
    }
});