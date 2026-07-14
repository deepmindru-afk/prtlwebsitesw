import { Icons } from '$lib/assets/icons';

export type Aside = Record<string, Link[]>;
export type Link = {
	title: string;
	href: string;
	icon?: typeof Icons.LogoNext;
	status?: 'new' | 'soon' | 'draft';
};

export const aside_items: Aside = {
	Главное: [
		{
			title: 'Главная',
			href: '/'
		},
		{
			title: 'Агенты',
			href: '/agents',
			status: 'new'
		},
	],
	сервисы: [
		{
			title: 'Блокнот',
			href: '/colors',
			status: 'draft'
		},
		{
			title: 'Видеоконференции и чаты',
			href: '/snippet',
			status: 'new'
		},
		//{
		//	title: 'Бессерверная облачная ОС',
		//	href: 'https://prtl.cc',
		//	status: 'draft'
		//},
		{
			title: 'Портал',
			href: '/brands',
			//href: 'brands#next.js',
			//icon: Icons.LogoVercel,
			status: 'draft'
		},

	],
	//Премиум: [
	//	{
	//		title: 'Портал ОС',
	//		href: 'https://prtl.cc',
	//		status: 'new'
	//	},
	//]	
};
