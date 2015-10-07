import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;
    
   /* json(url: string, data?: any, headers?: any, method: string = 'GET'): async.IThenable<any> {
        return this.http.json<models.IResponse>({
            method: method,
            headers: headers,
            url: url,
            data: data,
        }).then((success) => {
            return success.response.data;
        }, (error) => {
            throw error.response.message;
        });
    }*/

    

    host: string = 'https://api.parse.com/1/classes/BlogPosts'
    
    headers: any = {
            'X-Parse-Application-Id':'8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
            'X-Parse-REST-API-Key':'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm',
            "Content-Type": "application/json"
    }
    
}
