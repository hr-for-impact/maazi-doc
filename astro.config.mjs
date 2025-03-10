import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	site: 'https://hr-for-impact.github.io',
  base: 'maazi-doc',
	output: 'server',
  adapter: node({
    mode: "standalone"
  }),
	integrations: [
		starlight({
			title: 'maazi doc',
			social: {
				github: 'https://github.com/hr-for-impact',
			},
			sidebar: [
				{
					label: 'Bienvenue',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bienvenue', link: '/guides/bienvenue/' },
					],
				},
				{
					label: 'Ressources',
					autogenerate: { directory: 'ressources' },
				},
				{
					label: 'maazi-front',
					autogenerate: { directory: 'maazi-front' },
				},
				{
					label: 'maazi-dashboard',
					autogenerate: { directory: 'maazi-dashboard' },
				},
				
			],
		}),
	],
});
