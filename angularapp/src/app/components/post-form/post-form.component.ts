import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
	selector: 'app-post-form',
	templateUrl: './post-form.component.html',
	styleUrls: [ './post-form.component.css' ]
})
export class PostFormComponent implements OnInit {
	post: Post[];

	constructor(private postService: PostService) {}

	ngOnInit() {}

	addPost(title, body) {
		if (!title || !body) {
			alert('please add post');
		} else {
			this.postService.savePost({ title, body } as Post).subscribe((post) => {
				console.log(post);
			});
		}
	}
}

// import { Component, OnInit } from '@angular/core';
// import { PostService } from '../../services/post.service';
// import { Post } from '../../models/Post';
// import { post } from 'selenium-webdriver/http';

// @Component({
// 	selector: 'app-post-form',
// 	templateUrl: './post-form.component.html',
// 	styleUrls: [ './post-form.component.css' ]
// })
// export class PostFormComponent implements OnInit {
// 	post: Post[];

// 	constructor(private postService: PostService) {}

// 	ngOnInit() {}

// 	addPost(title, body) {
// 		if (!title || !body) {
// 			alert('please add post');
// 		} else {
// 			// this.postService.getPosts().subscribe((posts) => {
// 			// 	this.post = posts;
// 			// });
// 			this.postService.getPosts().subscribe((posts) => {
// 				this.post = posts;
// 				this.post.unshift({ title, body });
// 				console.log(this.post);
// 			});
// 		}
// 	}
// }
