import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc';

export default class PostRepository extends BaseRepository {

	constructor(private postService: PostService) {
		super();
	}
	

}

register.injectable('post-repo', PostRepository, [PostService]);
