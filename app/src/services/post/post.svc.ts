import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostService extends BaseService {


getPosts(data?: any): async.IThenable<any> {
        return this.http.json<models.IResponse>({
            method: 'GET',
            headers: this.headers,
            url: this.host,
            data: data,
        }).then((success) => {
            return success.response.results;
        }, (error) => {
            throw error.response.message;
        });
}

newPost(data?: any): async.IThenable<any> {
        return this.http.json<models.IResponse>({
            method: 'POST',
            headers: this.headers,
            url: this.host,
            data: data,
        }).then((success) => {
            return success.response.results;
        }, (error) => {
            throw error.response.message;
        });
}

}

register.injectable('post-svc', PostService);
