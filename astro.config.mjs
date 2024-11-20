import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kiti Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'História',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'História da Kiti', slug: 'historia/história' },
					],
				},
				{
					label: 'KitiumOS',
					autogenerate: { directory: 'kitiumos' },
				},
			],
		}),
	],
});
