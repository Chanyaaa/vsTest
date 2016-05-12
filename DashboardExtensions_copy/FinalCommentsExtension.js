define('FinalCommentsExtension', ['jquery', 'exports', 'knockout', 'BaseWidgetSettingsEditor'], function ($, exports, ko, WidgetSettingsEditor) {

    var WIDGET      = 'FinalCommentsWidget';
    var TEMPLATE    = 'final-comments-settings-template';
    var TYPE        = 'finalCommentsType';

    var OPTIONS_SOURCE = {
        type: TYPE,
        displayName: 'Final Comments',
        color: '#1B95E0',
        icon: 'trophy',
        defaultOptions: {
            layout: {
                minWidth: 3,
                minHeight: 3
            },
            settings: {
                useSharedDateNavigation: false,
                useSharedEntityNavigation: true
            }
        }
    };

    var FinalCommentsSettingsEditor = (function (customViewElement) {
        function FinalCommentsSettingsEditor(customViewElement) {
            WidgetSettingsEditor.BaseWidgetSettingsEditor.call(this, customViewElement);
            console.log(customViewElement);
            this.editorTemplate = TEMPLATE;
            // this.text = ko.observable(customViewElement.settings.text);
        }

        FinalCommentsSettingsEditor.prototype = $.extend(true, WidgetSettingsEditor.BaseWidgetSettingsEditor.prototype);

        FinalCommentsSettingsEditor.prototype.getViewSource = function () {
            var viewSource                     = WidgetSettingsEditor.BaseWidgetSettingsEditor.prototype.getViewSource.call(this);
            viewSource.parameters.viewName     = WIDGET;
            // viewSource.settings.text = this.text();
            return viewSource;
        };

        FinalCommentsSettingsEditor.create = function (customViewElement, options) {
            return new FinalCommentsSettingsEditor(customViewElement, options);
        };

        return FinalCommentsSettingsEditor;
    })();

    exports.editor  = FinalCommentsSettingsEditor;
    exports.type    = TYPE;
    exports.options = OPTIONS_SOURCE;
});