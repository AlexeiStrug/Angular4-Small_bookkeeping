import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/base/base-api';
import {Observable} from 'rxjs/Observable';
import {WFMEvent} from '../models/event.model';

@Injectable()
export class EventsService {

  constructor(private baseApi: BaseApi) {

  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.baseApi.post('events', event);
  }

  getEvent(): Observable<WFMEvent[]> {
    return this.baseApi.get('events');
  }

  getEventById(id: string): Observable<WFMEvent> {
    return this.baseApi.get(`events/${id}`);
  }
}
