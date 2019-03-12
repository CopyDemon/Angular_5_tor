import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: [ './posts.component.css' ]
})
export class PostsComponent implements OnInit {
	post: Post[];
	constructor(private postService: PostService) {}
	user = {};
	ngOnInit() {
		this.postService.getPosts().subscribe((posts) => {
			this.post = posts;
		});
	}
}
