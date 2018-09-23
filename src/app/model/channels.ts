    export interface Broadcastnow {
        broadcastid: number;
        cast: string;
        director: string;
        endtime: string;
        episodename: string;
        episodenum: number;
        episodepart: number;
        filenameandpath: string;
        firstaired: string;
        genre: string[];
        hasrecording: boolean;
        hastimer: boolean;
        hastimerrule: boolean;
        imdbnumber: string;
        isactive: boolean;
        isseries: boolean;
        originaltitle: string;
        parentalrating: number;
        plot: string;
        plotoutline: string;
        progress: number;
        progresspercentage: number;
        rating: number;
        recording: string;
        runtime: number;
        starttime: string;
        title: string;
        wasactive: boolean;
        writer: string;
        year: number;
    }

    export interface Channel {
        broadcastnow: Broadcastnow;
        channel: string;
        channelid: number;
        channeltype: string;
        hidden: boolean;
        isrecording: boolean;
        label: string;
        lastplayed: string;
        locked: boolean;
        thumbnail: string;
    }

    export interface Limits {
        end: number;
        start: number;
        total: number;
    }

    export interface ChannelsResult {
        channels: Channel[];
        limits: Limits;
    }

    export interface ChannelsObj {
        id: string;
        jsonrpc: string;
        result: ChannelsResult;
    }

