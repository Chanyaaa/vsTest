require(['DashboardSourcesViewModel', 'WidgetSettingsEditorRegistry', 'FreeTextExtension', 'UserNameWidget'], function (DashboardSourcesViewModel, WidgetSettingsEditorRegistry, FreeTextExtension, userNameWidget) {
    var loadTemplate = function(file) {
        $.get('/view/DashboardExtensions/resources/' + file + '.html', function(template) {
            $('body').append(template);
        });
    };



    /*
    WidgetSettingsEditorRegistry.WidgetSettingsEditorRegistry.prototype.getEditorFor = function (viewSource, options) {
        var editor = this.mappersByType[viewSource.type];
        editor.getViewSource();
        if (!editor) {
            throw "No editor for type <" + viewSource.type + "> has added yet.";
        }
        return editor.create(viewSource, options);
    }

    WidgetSettingsEditorRegistry.WidgetSettingsEditorRegistry.prototype.registerEditor = function (type, editor) {
        this.mappersByType[type] = editor;
    };*/

    loadTemplate('FreeTextTemplate');
    DashboardSourcesViewModel.getSingleton().addMiscellaneousSource(FreeTextExtension.options);
    WidgetSettingsEditorRegistry.getSingleton().registerEditor(FreeTextExtension.type, FreeTextExtension.editor);


    loadTemplate(userNameWidget.template);
    DashboardSourcesViewModel.getSingleton().addMiscellaneousSource(userNameWidget.options);
    WidgetSettingsEditorRegistry.getSingleton().registerEditor(userNameWidget.options.type, userNameWidget.editor);

});