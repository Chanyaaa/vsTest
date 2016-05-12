require(['DashboardSourcesViewModel', 'WidgetSettingsEditorRegistry', 'FreeTextExtension', 'UserNameWidget'], function (DashboardSourcesViewModel, WidgetSettingsEditorRegistry, FreeTextExtension, userNameWidget) {
    function loadTemplate(file) {
        $.get('/view/DashboardExtensions/resources/' + file + '.html', function(template) {
            $('body').append(template);
        });
    };


    loadTemplate('FreeTextTemplate');
    DashboardSourcesViewModel.getSingleton().addMiscellaneousSource(FreeTextExtension.options);
    WidgetSettingsEditorRegistry.getSingleton().registerEditor(FreeTextExtension.type, FreeTextExtension.editor);


    loadTemplate(userNameWidget.template);
    DashboardSourcesViewModel.getSingleton().addMiscellaneousSource(userNameWidget.options);
    WidgetSettingsEditorRegistry.getSingleton().registerEditor(userNameWidget.options.type, userNameWidget.editor);

});