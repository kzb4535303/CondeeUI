import { Injectable, ComponentRef } from "@angular/core";
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { PopupConfigInterface } from './interface/popup.interface';
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable()
export class PopupService {
    overlay: Overlay = null;
    overlayRef: OverlayRef = null;
    componentRef: ComponentRef<any> = null;
    constructor(private _overlay: Overlay) {
        this.overlay = this._overlay;
    }
    showPopup(showPopConfig: PopupConfigInterface) {
        let overlayConfig = new OverlayConfig()
        overlayConfig.hasBackdrop = showPopConfig.hasBackdrop || false;
        overlayConfig.positionStrategy = this.overlay.position().global().centerVertically().centerHorizontally()
        this.overlayRef = this.overlay.create(overlayConfig)
        this.overlayRef.backdropClick().subscribe(() => {
            this.clearPopup()
        })
        this.componentRef = this.overlayRef.attach(new ComponentPortal(showPopConfig.component, null, showPopConfig.injector || null))
    }
    clearPopup() {
        if(this.overlayRef) {
            this.overlayRef.dispose()
        }
    }
}