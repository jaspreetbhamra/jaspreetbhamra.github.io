import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const blogPosts = [
	{
		title: "Building AI Systems in Biology",
		date: "2024-12-15",
		tags: ["AI", "Biology", "ML"],
		summary:
			"Exploring the intersection of artificial intelligence and biological research, and how ML models are transforming protein engineering.",
		link: "/blog/ai-biology",
	},
	{
		title: "From Data Engineering to ML Research",
		date: "2024-10-22",
		tags: ["Career", "ML", "Data"],
		summary:
			"A reflection on my journey from building data pipelines at Morgan Stanley to conducting ML research at SDSC.",
		link: "/blog/data-to-ml",
	},
	{
		title: "The Art of Storytelling with Data",
		date: "2024-08-10",
		tags: ["Data", "Visualization", "Communication"],
		summary:
			"How effective data visualization and narrative can transform complex insights into actionable knowledge.",
		link: "/blog/storytelling-data",
	},
];

const Blog = () => {
	return (
		<PageLayout>
			<section>
				<h1 className="text-4xl font-display text-slate-100 mb-4">Blog</h1>
				<p className="text-slate-300 mb-8">
					Thoughts on machine learning, data science, and the stories behind the
					code.
				</p>

				<div className="grid gap-6 md:grid-cols-2">
					{blogPosts.map((post) => (
						<Link
							key={post.link}
							to={post.link}
							className="block rounded-2xl border border-slate-600 bg-slate-800/40 p-6 hover:border-sky-400 hover:shadow-lg transition-all"
						>
							<div className="mb-4">
								<h2 className="text-xl font-semibold text-slate-100 mb-2">
									{post.title}
								</h2>
								<time className="text-slate-500 text-xs">{post.date}</time>
							</div>

							<p className="text-slate-300 text-sm mb-4">{post.summary}</p>

							{post.tags && post.tags.length > 0 && (
								<div className="flex gap-2 flex-wrap">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 rounded bg-slate-700/50 text-sky-400 text-xs"
										>
											#{tag}
										</span>
									))}
								</div>
							)}
						</Link>
					))}
				</div>
			</section>
		</PageLayout>
	);
};

export default Blog;
