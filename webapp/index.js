sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], function (Button, MessageToast) {
    var btn = new Button({
        text: "Ready...!",
        press: function () {
            MessageToast.show("Hello World!!!");
        }
    });
    btn.placeAt("content");
});
