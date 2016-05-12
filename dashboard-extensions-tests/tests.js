require(['QUnit', 'FreeTextExtension', 'UserNameWidget', 'ViewModel', 'BaseWidgetSettingsEditor', 'EntityNavigationViewModel'], function (QUnit, FreeTextExtension, UserNameWidget, UserNameWidgetViewModel, BaseWidgetSettingsEditor, EntityNavigationViewModel) {
    QUnit.test("Free text widget type test", function (assert) {
        assert.ok(FreeTextExtension.type == "freeTextType", "Editor type");
        var customViewElement = {
            settings: {
                text: "test",
                color: "red",
                font: "10px"
            }
        }
        var freeTextEditor = FreeTextExtension.editor.create(customViewElement);
        assert.ok(freeTextEditor.editorTemplate == 'example-widget-settings-template', 'Editor template');
        assert.ok(freeTextEditor.text() == 'test', "editor text");
        assert.ok(freeTextEditor.font() == '10px', "editor font");
        assert.ok(freeTextEditor.color() == 'red', "editor color");
    });
    QUnit.test("Username widget type test", function (assert) {
        assert.ok(UserNameWidget.options.type == 'userNameType', 'Editor type');
        var editor = UserNameWidget.editor.create();
        assert.ok(editor.editorTemplate == 'username-widget-settings-template', 'Editor template')

        EntityNavigationViewModel.getSingleton().setDisplayName('testDisplayName');
        var usernameViewModel = new UserNameWidgetViewModel();
        assert.ok(usernameViewModel.userName() == 'testDisplayName', 'userName');
    });

    QUnit.load();
    QUnit.start();
});