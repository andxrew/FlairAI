"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
	{
		name: "Andy",
		avatar: "A",
		title: "Software Developer",
		description: "This has really helped me with complex math equations!",
	},

	{
		name: "James",
		avatar: "J",
		title: "UX / UI Designer",
		description: "I can easily get lots of inspiration and assets for my work",
	},

	{
		name: "Ella",
		avatar: "E",
		title: "Student",
		description: "This has made writing essays really easy!",
	},

	{
		name: "Mike",
		avatar: "M",
		title: "Content Creator",
		description:
			"The videos produced are quick and easy, i use them all the time",
	},
];
export const LandingContent = () => {
	return (
		<div className="px-10 pb-20">
			<h2 className="text-center text-4xl text-white font-extrabold mb-10">
				Testimonials
			</h2>
			<div
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
             lg:grid-cols-4 gap-4"
			>
				{testimonials.map((item) => (
					<Card
						key={item.description}
						className="bg-[#192339] border-none 
                    text-white"
					>
						<CardHeader>
							<CardTitle className="flex items-center gap-x-2">
								<div>
									<p className="text-lg">{item.name}</p>
									<p className="text-zinc-400 text-sm">{item.title}</p>
								</div>
							</CardTitle>
							<CardContent className="pt-4 px-0">
								{item.description}
							</CardContent>
						</CardHeader>
					</Card>
				))}
			</div>
		</div>
	);
};
