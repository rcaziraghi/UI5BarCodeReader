sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/base/i18n/ResourceBundle"
], function (ResourceModel, ResourceBundle) {
    "use strict";

    return {

        getText: function (sTextName) {

            if (!this.i18nModel) {
                this.i18nModel = new ResourceModel({
                    bundle: ResourceBundle.create({
                        bundleName: "UI5BarCodeReader.messagebundle"
                    }),
                });
            }

            var sMsg = this.i18nModel.getResourceBundle().getText(sTextName);

            return sMsg;
        }

    };
});