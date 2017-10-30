import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';
import {BaseApi} from '../../../shared/base/base-api';

@Injectable()
export class BillService {

  constructor(private baseApi: BaseApi,
              private http: Http) {
  }

  getBill(): Observable<Bill> {
    return this.baseApi.get('bill');
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get(`http://api.fixer.io/latest?base=${base}`)
      .map((response: Response) => response.json());
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.baseApi.put('bill', bill);
  }

}
