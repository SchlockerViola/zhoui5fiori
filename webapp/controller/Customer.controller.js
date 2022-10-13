sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("at.clouddna.student05.zhoui5.controller.Customer", {
            onInit: function () {

            },

            genderFormatter: function(sKey){ //s for string, a for array, o - Object, i - init.....
                let oView = this.getView(); //auf zugehörige View zum Controller zugreifen
                let oI18nModel = oView.getModel("i18n"); //Modename aus manifest
                let oResourceBundle = oI18nModel.getResourceBundle(); //Texte aus ResourceBundle lesen zwecks Übersetzung
                let sText = oResourceBundle.getText(sKey); //ist Schlüssel im i18n verfügbar, wird er gelesen
                
                return sText; 
            }
        });
    });
