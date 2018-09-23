    import {Broadcastnow, Limits} from './channels';
    
    export interface ChannelResult {
        broadcasts: Broadcastnow[];
        limits: Limits;
    }

    export interface ChannelObj {
        id: string;
        jsonrpc: string;
        result: ChannelResult;
    }

