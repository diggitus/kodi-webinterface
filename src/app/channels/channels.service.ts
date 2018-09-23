import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { channels } from './channels-resp';
import { ChannelsObj } from '../model/channels';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ChannelsService {

  constructor(
    private http: Http
  ) { }

  public getChannels(): Observable<ChannelsObj> {
    return Observable.of(<ChannelsObj>channels);
  }

}