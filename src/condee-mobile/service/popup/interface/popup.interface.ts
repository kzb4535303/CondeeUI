import { Injector, Component, EventEmitter } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

export interface PopupConfigInterface {
    component: ComponentType<any>;
    injector?: Injector;
    hasBackdrop?: boolean;
    dismiss?: EventEmitter<any>;
}
