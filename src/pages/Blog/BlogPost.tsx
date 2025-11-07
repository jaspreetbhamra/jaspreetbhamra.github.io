import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "@/app/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function BlogPost() {
	const navigate = useNavigate();

	// Sample blog post data
	const post = {
		title: "Sample Blog Post Title",
		date: "March 15, 2024",
		readTime: "5 min read",
		tags: ["React", "TypeScript", "Web Development"],
		bannerImage: "/blog/banner.jpg", // Optional: add your banner image
		content: "Lorem ipsum dolor sit amet, consectetur adipis",
	};

	return (
		<PageContainer className="!px-0 !py-0">
			{/* Hero Banner */}
			<div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
				{/* Background gradient or image */}
				<div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 dark:from-accent-700 dark:via-accent-800 dark:to-accent-900" />

				{/* Uncomment to use actual banner image */}
				{/* <img
					src={post.bannerImage}
					alt={post.title}
					className="absolute inset-0 w-full h-full object-cover"
				/> */}

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/20" />

				{/* Back button */}
				<div className="absolute top-6 left-6">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => navigate("/blog")}
						className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Blog
					</Button>
				</div>
			</div>

			{/* Article Content */}
			<article className="relative -mt-20 px-4 md:px-8 pb-16">
				<div className="max-w-3xl mx-auto">
					{/* Article header card */}
					<div className="bg-white dark:bg-neutral-900 rounded-xl shadow-soft-lg p-8 md:p-12 mb-12">
						{/* Meta information */}
						<div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4" />
								<time>{post.date}</time>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4" />
								<span>{post.readTime}</span>
							</div>
						</div>

						{/* Title */}
						<h1 className="heading-1 mb-6">{post.title}</h1>

						{/* Tags */}
						<div className="flex gap-2 flex-wrap">
							{post.tags.map((tag) => (
								<Badge key={tag} variant="accent">
									{tag}
								</Badge>
							))}
						</div>
					</div>

					{/* Article body */}
					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<div className="bg-white dark:bg-neutral-900 rounded-xl shadow-soft p-8 md:p-12">
							{/* Introduction */}
							<p className="text-lg leading-relaxed mb-6 text-neutral-700 dark:text-neutral-300">
								{post.content}
							</p>

							{/* Content sections */}
							<h2 className="heading-2 mt-12 mb-4">Section Heading</h2>
							<p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris.
							</p>

							<h3 className="heading-3 mt-8 mb-3">Subsection Heading</h3>
							<p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt mollit
								anim id est laborum.
							</p>

							{/* Code block placeholder */}
							<div className="my-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 overflow-x-auto">
								<pre className="text-sm">
									<code className="text-neutral-800 dark:text-neutral-200">
										{`// Example code block
const example = "Add your code here";
console.log(example);`}
									</code>
								</pre>
							</div>

							<h2 className="heading-2 mt-12 mb-4">Another Section</h2>
							<p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae vitae
								dicta sunt explicabo.
							</p>

							{/* Conclusion */}
							<h2 className="heading-2 mt-12 mb-4">Conclusion</h2>
							<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
								aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt.
							</p>
						</div>
					</div>

					{/* Back to blog link */}
					<div className="mt-12 text-center">
						<Button variant="outline" onClick={() => navigate("/blog")}>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to All Posts
						</Button>
					</div>
				</div>
			</article>
		</PageContainer>
	);
}
