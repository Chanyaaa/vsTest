define('ExperimentalWidgetViewModel',['knockout'], function (ko) {
    function ExperimentalWidgetViewModel(container) {
        self = this;
        self.container = container;

        self.text = ko.observable();
        self.color = ko.observable();
        self.fontSize = ko.observable();

        this.updateSettings = function () {
            var settings = self.container.widgetSettings();

            self.text(settings.text);
            self.color(settings.color);
            self.fontSize(settings.fontSize);
        }

        self.updateSettings();
    }

    return ExperimentalWidgetViewModel;
});