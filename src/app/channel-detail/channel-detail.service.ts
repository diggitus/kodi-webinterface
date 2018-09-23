import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ChannelObj } from '../model/channel';
import { channel } from './channel-resp';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChannelDetailService {

  constructor(
    private http: Http
  ) { }

  getChannel(): Observable<ChannelObj> {
    return Observable.of(<ChannelObj>channel);
  }

}
