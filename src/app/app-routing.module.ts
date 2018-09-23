import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelDetailComponent } from './channel-detail/channel-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'channels', pathMatch: 'full' },
    { path: 'channels', component: ChannelsComponent },
    { path: 'channel', component: ChannelDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
