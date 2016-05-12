define('EntityNavigationViewModel', [], function () {
    var _instance = new EntityNavigationViewModel();
    return {
        getSingleton: function () {
            return _instance;
        }
    }
    function EntityNavigationViewModel() {
        var self = this;
        self.displayName = null;
        this.currentEntity = function () {
            return {
                displayName: self.displayName
            }
        }
        this.setDisplayName = function (displayName) {
            self.displayName = displayName;
        }
    }
});