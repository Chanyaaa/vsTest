define('FreeTextExtension', ['jquery', "exports", 'knockout', 'BaseWidgetSettingsEditor'], function ($, exports, ko, WidgetSettingsEditor) {
    var WIDGET      = 'ExperimentalWidget';
    var TEMPLATE    = 'example-widget-settings-template';
    var TYPE        = 'freeTextType';

    var COLORS      = ['black', 'red', 'green'];
    var FONT_SIZES  = [
                        { name: '10px', size: '10px' }, 
                        { name: '20px', size: '20px' }, 
                        { name: '30px', size: '30px' }
                    ];

    var OPTIONS_SOURCE = {
        type: TYPE,
        displayName: 'Free Text',
        color: '#1B95E0',
        icon: 'pencil',
        defaultOptions: {
            layout: {
                minWidth: 12,
                minHeight: 6
            },
            settings: {
                text: null,
                font: null,
                color: null,
                useSharedDateNavigation: false,
                useSharedEntityNavigation: true
            }
        }
    };


    var FreeTextSettingsEditor = (function (customViewElement) {
        function FreeTextSettingsEditor(customViewElement) {
            WidgetSettingsEditor.BaseWidgetSettingsEditor.call(this, customViewElement);

            this.colors = COLORS;
            this.fontSizes = FONT_SIZES;

            this.editorTemplate = TEMPLATE;
            this.text           = ko.observable(customViewElement.settings.text);
            this.font           = ko.observable(customViewElement.settings.font);
            this.color          = ko.observable(customViewElement.settings.color);
        }

        FreeTextSettingsEditor.prototype = $.extend(true, WidgetSettingsEditor.BaseWidgetSettingsEditor.prototype);

        FreeTextSettingsEditor.prototype.getViewSource = function () {
            var viewSource                     = WidgetSettingsEditor.BaseWidgetSettingsEditor.prototype.getViewSource.call(this);
            viewSource.parameters.viewName     = WIDGET;
            viewSource.settings.text           = this.text();
            viewSource.settings.font           = this.font();
            viewSource.settings.color          = this.color();
            return viewSource;
        };

        FreeTextSettingsEditor.create = function (customViewElement, options) {
            return new FreeTextSettingsEditor(customViewElement, options);
        };

        return FreeTextSettingsEditor;
    })();

    exports.editor  = FreeTextSettingsEditor;
    exports.type    = TYPE;
    exports.options = OPTIONS_SOURCE;
});