import { Component, OnInit } from '@angular/core';
import { AlertService } from './../../condee-mobile/components/cd-alert/service/alertService';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private alertService: AlertService) {
    
  }

  ngOnInit() {
  }
  openAlert() {
    this.alertService.openAlert()
  }

}
