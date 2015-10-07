import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import PostService from '../../services/post/post.svc';

export default class NewpostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');
    
    constructor(private postService: PostService){
        super();
    }

    context: any = {
        author: '',
        title: '',
        content: ''
    };
    
    createPost(): void{
        var post: any = {
            author: this.context.author,
            title: this.context.title,
            content: this.context.content
        }
        
        this.postService.newPost(post);
        this.navigator.navigate(HomeViewControl);
    }
        
    
}

register.viewControl('newpost-vc', NewpostViewControl, [PostService]);
