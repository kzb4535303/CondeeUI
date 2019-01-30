import { Injectable } from "@angular/core";
import { PopupService } from './../../../service/popup/popup.service';
import { CdAlertComponent } from './../cd-alert.component';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(private popupService: PopupService ) {}
    openAlert() {
        this.popupService.showPopup({
            component: CdAlertComponent,
        })
    }
}