import { View } from './View';
import { ClientView } from './ClientView';
import { AdminView } from './AdminView';
import { ViewAbstraction } from './ViewAbstraction';

class Main {
    clientViewContainer = document.getElementById('client-container');
    adminViewContainer = document.getElementById('admin-container');


    itemRecord: ViewAbstraction;
    displayed: View;
    clientView: View;
    adminView: View;
    constructor() {
        this.clientView = new ClientView();
        this.adminView = new AdminView();
        this.itemRecord = new ViewAbstraction(this.clientView);
        this.itemRecord.draw();

        this.toggleView('client');

    }

    getView() {
        return this.displayed;
    }
    draw() {
        this.itemRecord.draw();
    }
    toggleView(viewName) {
        if (viewName == 'client') {
            this.adminViewContainer.style.display = 'none';
            this.clientViewContainer.style.display = 'flex';

            this.itemRecord.setView(this.clientView);
            this.itemRecord.draw();

        } else {
            this.clientViewContainer.style.display = 'none';
            this.adminViewContainer.style.display = 'flex';

            this.itemRecord.setView(this.adminView);
            this.itemRecord.draw();
        }
    }


}
