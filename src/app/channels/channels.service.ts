import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
    const body = {"jsonrpc":"2.0","method":"PVR.GetChannels","id":"1537717668728","params":{"channelgroupid":"alltv","properties":["thumbnail","channeltype","hidden","locked","channel","lastplayed","broadcastnow","isrecording"],"limits":{"start":0}}};
    return this.http.post('/jsonrpc?ChannelCollection', body).map((resp: Response) => <ChannelsObj>resp.json());
  }

}