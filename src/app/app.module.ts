
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';
import { ChannelsService } from './channels/channels.service';
import { ChannelDetailService } from './channel-detail/channel-detail.service';

@NgModule({
    declarations: [
        AppComponent,
        ChannelsComponent,
        ChannelDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule,
        AppRoutingModule
    ],
    providers: [
        ChannelsService,
        ChannelDetailService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
