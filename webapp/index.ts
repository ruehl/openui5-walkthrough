sap.ui.define(
    [
        "sap/m/Button",
	    "sap/m/MessageToast"
    ],
    function(Button: typeof sap.m.Button, MessageToast: typeof sap.m.MessageToast) {
        const btn = new Button(null, {
            text: "Ready...",
            press: function () {
                MessageToast.show("Hello World!");
            }
        });

        btn.placeAt("content");
    });