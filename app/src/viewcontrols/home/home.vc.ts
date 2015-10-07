import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import NewpostViewControl from  '../newpost/newpost.vc';
import PostService from '../../services/post/post.svc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    
    constructor(private postService: PostService){
        super();
    }

    context: any = {
        posts:<Array<models.IPost>> []
    };
    
    navigatedTo(): void {
    this.postService.getPosts().then((posts) => {
        console.log(posts);
        this.context.posts = posts;
        
    });
}

    newPost(): void {
        this.navigator.navigate(NewpostViewControl)
    }
    
    
}

register.viewControl('home-vc', HomeViewControl, [PostService]);
