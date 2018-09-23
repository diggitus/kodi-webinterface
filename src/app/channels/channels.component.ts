import { Component, OnInit } from '@angular/core';
import { ChannelsService } from './channels.service';
import { ChannelsObj } from '../model/channels';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  channels: ChannelsObj | null;

  constructor(
    private channelsService: ChannelsService
  ) {
    this.channels = null;
  }

  ngOnInit() {
    this.channelsService.getChannels().subscribe(channelsResp => this.channels = channelsResp);
  }

  getTime(time: string) {
    const startDate = new Date(time);
    return new Date(startDate.getTime() + (2 * 60 * 60 * 1000));
  }

}
