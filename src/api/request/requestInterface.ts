import { xhrResponseI, sendMessageI } from '../messageInterface';

export interface requestInterface {
  xhr(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string | { url: string; data?: any; headers?: any },
  ): Promise<xhrResponseI>;

  sendMessage?(message: sendMessageI): Promise<any>;
}
