"use client";

import { useParams } from "next/navigation";

function BlogPostsPage() {
	const params = useParams();
	console.log(params);
	return (
		<div>
			<h1>The Blog slug Posts</h1>
		</div>
	);
}

export default BlogPostsPage;