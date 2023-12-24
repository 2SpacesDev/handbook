import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '2SpacesDev Handbook',
			social: {
				github: 'https://github.com/2SpacesDev',
			},
			sidebar: [
				{
					label: 'About 2SpacesDev',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'The Haiku', link: '/about/the-haiku/' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Example Guide',
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'Example Guide', link: '/guides/example/' },
							],
						},
					],
				},
				{
					label: 'Marketing',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/marketing/overview' },
						{
							label: 'Brand',
							// Each item here is one entry in the navigation menu.
							autogenerate: { directory: 'marketing/brand' },

						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
