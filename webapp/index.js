sap.ui.define([
    "sap/m/Button",
    "sap/m/MessageToast"
], 
/**
 * @param {typeof sap.m.Button} Button
 * @param {typeof sap.m.MessageToast} MessageToast
 * */
function (Button, MessageToast) {
    var btn = new Button({
        text: "Ready...",
        press: function () {
            MessageToast.show("Hello World!");
        }
    });
    btn.placeAt("content");
});
