import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const BlogPostTemplate = ({ title, date, tags, content }) => {
	return (
		<PageLayout>
			<section className="flex flex-col min-h-[80vh] justify-between">
				<div>
					{/* Header */}
					<div className="mb-8">
						<h1 className="text-4xl font-display text-slate-100 mb-3">
							{title}
						</h1>
						<div className="flex items-center gap-4 text-sm text-slate-400">
							<time dateTime={date}>{date}</time>
							{tags && tags.length > 0 && (
								<div className="flex gap-2">
									{tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 rounded bg-slate-700/50 text-sky-400 text-xs"
										>
											#{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Content */}
					<article className="prose prose-invert prose-slate max-w-none">
						<div className="text-slate-300 leading-relaxed whitespace-pre-line">
							{content}
						</div>
					</article>
				</div>

				{/* Return Button */}
				<div className="pt-12 pb-12 flex justify-start">
					<Link
						to="/blog"
						className="px-6 py-3 rounded-lg border border-slate-600 bg-slate-800/40 text-slate-100 hover:border-sky-400 hover:text-sky-300 transition-all"
					>
						← Back to Blog
					</Link>
				</div>
			</section>
		</PageLayout>
	);
};

export default BlogPostTemplate;
