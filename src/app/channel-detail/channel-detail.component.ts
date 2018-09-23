import { Component, OnInit } from '@angular/core';
import { ChannelDetailService } from './channel-detail.service';
import { ChannelObj } from '../model/channel';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css']
})
export class ChannelDetailComponent implements OnInit {

  channel: ChannelObj | null;

  constructor(
    private detailService: ChannelDetailService
  ) {
    this.channel = null;
  }

  ngOnInit() {
    this.detailService.getChannel().subscribe(resp => this.channel = resp);
  }

}
