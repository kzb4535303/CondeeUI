import { EventEmitter } from '@angular/core';

export interface RefreshInterface {
    //input
    maxPull: number;
    minPull: number;
    transition: number;
    pullSpeed: number;
    enable: boolean;
    completeDelay: number;

    //output
    refresh: EventEmitter<any>;
}
export interface RefreshContentInterface {
    pullingIcon: string;
    pullingText: string;
    readyIcon: string;
    readyText: string;
    refreshingIcon: string;
    refreshingText: string;
    keepPullingText: string;
    keepPullingicon: string;
}