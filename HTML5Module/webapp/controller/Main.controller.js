sap.ui.define([
     "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
     function (Controller, jsonmodel) {
          "use strict";

          return Controller.extend("ns.HTML5Module.controller.Main", {
               onInit: function () {
                    this.LocalJSONModel = new jsonmodel({
                         empTableModel: [] 
                    }); 
                    this.getView().setModel(this.LocalJSONModel, "localModel");
                    thi.i18nModel = this.getOwnerComponent().getModel("i18n");
               }
          });
     });
