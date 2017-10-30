import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../../shared/services/bill.service';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  euro: number;

  constructor() {
  }

  ngOnInit() {
    const {rates} = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.euro = rates['EUR'] * this.bill.value;
  }


}
