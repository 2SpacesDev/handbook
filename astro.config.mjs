import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '2SpacesDev Handboook',
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
						{ label: 'Example Guide', link: '/guides/example/' },
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
