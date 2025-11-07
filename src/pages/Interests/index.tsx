import { Music, Palette, Camera } from "lucide-react";
import { PageContainer } from "@/app/layout/PageContainer";

// Sample gallery items
const paintings = [
	{ id: 1, title: "Abstract Sunset", image: "/gallery/painting1.jpg" },
	{ id: 2, title: "City Lights", image: "/gallery/painting2.jpg" },
	{ id: 3, title: "Nature's Canvas", image: "/gallery/painting3.jpg" },
];

const photos = [
	{ id: 1, title: "Mountain Vista", image: "/gallery/photo1.jpg" },
	{ id: 2, title: "Urban Architecture", image: "/gallery/photo2.jpg" },
	{ id: 3, title: "Golden Hour", image: "/gallery/photo3.jpg" },
];

export default function Interests() {
	return (
		<PageContainer>
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-12 text-center">
					<h1 className="heading-1 mb-4">Interests & Hobbies</h1>
					<p className="body-large text-neutral-600 dark:text-neutral-400">
						Beyond code: exploring creativity through art, photography, and music.
					</p>
				</div>

				{/* Paintings Section */}
				<section className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<Palette className="w-6 h-6 text-accent-600 dark:text-accent-400" />
						<h2 className="heading-2">Paintings</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{paintings.map((item) => (
							<div
								key={item.id}
								className="group relative bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden aspect-square"
							>
								{/* Placeholder gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-accent-200 via-accent-300 to-accent-400 dark:from-accent-700 dark:via-accent-800 dark:to-accent-900" />

								{/* Uncomment to use actual images */}
								{/* <img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover"
									loading="lazy"
								/> */}

								{/* Title overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<h3 className="text-white font-medium">{item.title}</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Photography Section */}
				<section className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<Camera className="w-6 h-6 text-accent-600 dark:text-accent-400" />
						<h2 className="heading-2">Photography</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{photos.map((item) => (
							<div
								key={item.id}
								className="group relative bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden aspect-video"
							>
								{/* Placeholder gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-500 dark:from-neutral-600 dark:via-neutral-700 dark:to-neutral-800" />

								{/* Uncomment to use actual images */}
								{/* <img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover"
									loading="lazy"
								/> */}

								{/* Title overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<h3 className="text-white font-medium">{item.title}</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Music Section */}
				<section className="mb-16">
					<div className="flex items-center gap-3 mb-6">
						<Music className="w-6 h-6 text-accent-600 dark:text-accent-400" />
						<h2 className="heading-2">Music</h2>
					</div>

					{/* Spotify Embed Placeholder */}
					<div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8">
						<h3 className="heading-3 mb-4">Currently Listening</h3>
						<p className="text-neutral-600 dark:text-neutral-400 mb-6">
							Connect your Spotify to showcase your favorite tracks and playlists.
						</p>

						{/* Spotify Embed Instructions */}
						<div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-6 mb-6">
							<h4 className="font-semibold mb-3 text-neutral-900 dark:text-neutral-50">
								How to add Spotify embed:
							</h4>
							<ol className="list-decimal list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
								<li>Go to a Spotify playlist, album, or track</li>
								<li>Click the "..." menu and select "Share" → "Embed"</li>
								<li>Copy the iframe code</li>
								<li>
									Replace the placeholder iframe below with your Spotify embed code
								</li>
							</ol>
						</div>

						{/* Placeholder iframe */}
						<div className="aspect-video md:aspect-[3/1] w-full bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
							<div className="text-center px-4">
								<Music className="w-12 h-12 text-neutral-400 dark:text-neutral-600 mx-auto mb-3" />
								<p className="text-neutral-500 dark:text-neutral-500 text-sm">
									Spotify embed will appear here
								</p>
							</div>
						</div>

						{/* Example: Uncomment and replace with your Spotify embed */}
						{/* <iframe
							style={{ borderRadius: "12px" }}
							src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
							width="100%"
							height="352"
							frameBorder="0"
							allowFullScreen={false}
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						/> */}
					</div>
				</section>

				{/* Audio Snippets Section */}
				<section>
					<h2 className="heading-2 mb-6">Music Snippets</h2>
					<div className="grid gap-4">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
							>
								<div className="flex items-center justify-between mb-3">
									<h3 className="font-medium text-neutral-900 dark:text-neutral-50">
										Music Snippet {i}
									</h3>
									<span className="text-sm text-neutral-500 dark:text-neutral-400">
										0:00
									</span>
								</div>
								{/* Placeholder for audio player */}
								<div className="h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
									<p className="text-xs text-neutral-500 dark:text-neutral-500">
										Add your .mp3 file to public folder
									</p>
								</div>
								{/* Example: Uncomment and add your audio files */}
								{/* <audio controls className="w-full">
									<source src={`/audio/snippet${i}.mp3`} type="audio/mpeg" />
									Your browser does not support the audio element.
								</audio> */}
							</div>
						))}
					</div>
				</section>
			</div>
		</PageContainer>
	);
}
