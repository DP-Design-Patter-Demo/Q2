"use strict";
exports.__esModule = true;
var ClientView_1 = require("./ClientView");
var AdminView_1 = require("./AdminView");
var ViewAbstraction_1 = require("./ViewAbstraction");
var Main = /** @class */ (function () {
    function Main() {
        this.clientViewContainer = document.getElementById('client-container');
        this.adminViewContainer = document.getElementById('admin-container');
        this.clientView = new ClientView_1.ClientView();
        this.adminView = new AdminView_1.AdminView();
        this.itemRecord = new ViewAbstraction_1.ViewAbstraction(this.clientView);
        this.itemRecord.draw();
        this.toggleView('client');
    }
    Main.prototype.getView = function () {
        return this.displayed;
    };
    Main.prototype.draw = function () {
        this.itemRecord.draw();
    };
    Main.prototype.toggleView = function (viewName) {
        if (viewName == 'client') {
            this.adminViewContainer.style.display = 'none';
            this.clientViewContainer.style.display = 'flex';
            this.itemRecord.setView(this.clientView);
            this.itemRecord.draw();
        }
        else {
            this.clientViewContainer.style.display = 'none';
            this.adminViewContainer.style.display = 'flex';
            this.itemRecord.setView(this.adminView);
            this.itemRecord.draw();
        }
    };
    return Main;
}());
