define('UserNameWidget', ['jquery', 'knockout', 'BaseWidgetSettingsEditor'], function ($, ko, WidgetSettingsEditor) {
    var widget = {
        viewName: "UserNameWidget",
        template: "username-widget-settings-template",
        options: {
            type: "userNameType",
            displayName: 'Username',
            color: '#1B95E0',
            icon: 'user',
            defaultOptions: {
                layout: {
                    minWidth: 2,
                    minHeight: 2
                },
                settings: {
                    useSharedDateNavigation: true,
                    useSharedEntityNavigation: true
                }
            }
        }
    }

    var SettingsEditor = function (customViewElement) {
        WidgetSettingsEditor.BaseWidgetSettingsEditor.call(this, customViewElement);
        this.editorTemplate = widget.template;
        this.getViewSource = function () {
            var viewSource = WidgetSettingsEditor.BaseWidgetSettingsEditor.prototype.getViewSource.call(this);
            viewSource.parameters.viewName = widget.viewName;
            return viewSource;
        }
    }
    SettingsEditor.prototype = $.extend(true, WidgetSettingsEditor.BaseWidgetSettingsEditor.prototype);

    SettingsEditor.create = function (customViewElement, options) {
        return new SettingsEditor(customViewElement, options);
    };

    widget.editor = SettingsEditor;
    return widget;
});