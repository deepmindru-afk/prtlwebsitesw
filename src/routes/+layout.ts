import type { MetaTagsProps } from 'svelte-meta-tags';

export const prerender = true;

export function load({ url }) {
	const title = 'Портал';
	const description =
		"Облачный персональный компьютер, диалоговая операционная система и автономные агенты на основе искусственного интеллекта.";

	const baseMetaTags = Object.freeze({
		title,
		description:
			"Облачный персональный компьютер, диалоговая операционная система и автономные агенты на основе искусственного интеллекта.",
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_GB',
			title,
			description,
			siteName: 'Портал',
			images: [
				{
					url: 'https://raw.githubusercontent.com/sorokinvld/portal-brandpack/main/illa_logo.png',
					alt: 'Portal',
					width: 1200,
					height: 628,
					secureUrl: 'https://raw.githubusercontent.com/sorokinvld/portal-brandpack/main/illa_logo.png',
					type: 'image/jpeg'
				}
			]
		},
		twitter: {
			handle: '@sorokinvld',
			site: 'https://www.portalos.ru',
			cardType: 'summary_large_image' as const,
			title,
			description,
			imageAlt: 'Portal',
			image: 'https://raw.githubusercontent.com/sorokinvld/portal-brandpack/main/illa_logo.png'
		}
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags
	};
}
