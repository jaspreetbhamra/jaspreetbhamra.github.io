import Card from "../components/Card";
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
						<Card
							key={post.link}
							to={post.link}
							title={post.title}
							description={post.summary}
							date={post.date}
							tags={post.tags}
						/>
					))}
				</div>
			</section>
		</PageLayout>
	);
};

export default Blog;
