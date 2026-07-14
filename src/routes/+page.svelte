<script lang="ts">
	import { Icons } from '$lib/assets/icons';
	import PageWrapper from '$lib/components/shared/page-wrapper.svelte';
	import IntroductionLink from './introduction-link.svelte';

	const preview_icons = [
		Icons.GridSquare,
		Icons.External,
		Icons.ChartBarMiddle,
		Icons.ClockDashed,
		//Icons.Globe,
		//Icons.Flag,
		//Icons.Bell,
		//Icons.Box,
		//Icons.Shield,
		//Icons.Inbox,
		//Icons.PencilEdit,
		//Icons.FileText,
		Icons.Notification,
		Icons.Paperclip,
		Icons.ChartTrendingDown,
		Icons.CodeBracket,
		Icons.Key,
		Icons.FloppyDisk,
		Icons.Router,
		Icons.GitBranch,
		Icons.Command,
		Icons.SettingsSliders,
		Icons.Tabs,
		Icons.Database
	];

	const preview_colors = [
		'--gray-800',
		'--blue-800',
		'--purple-700',
		'--pink-800',
	];

	const preview_colors1 = [
		'--red-800',
		'--amber-800',
		'--green-800',
		'--teal-800'
	];
</script>

<PageWrapper
	title="Портал"
	description="АО «Портал» — инновационная платформа создания и внедрения AI‑агентов для бизнеса и персонального использования. Мы разрабатываем персональных интеллектуальных агентов на основе больших языковых моделей (LLM) и собственных алгоритмов машинного обучения. Наши решения помогают компаниям автоматизировать рутинные задачи, улучшать взаимодействие сотрудников с корпоративными системами и превращать разрозненные данные в практические инсайты. Для персонального использования Портал — Ваш облачный диалоговый ассистент и одновременно компьютер, который может общаться в чате или по телефону и выполнять рутинные повседневные задачи. Портал изменит ваш взгляд на работу с компьютерами и гаджетами. Откройте новые возможности с помощью Персональных автономных онлайн-ассистентов с искусственным интеллектом — умных, обучающихся и адаптирующихся под ваши нужды."
        style="width: 100%;"
>
	<section class="grid auto-rows-fr sm:grid-cols-2">
		<IntroductionLink
			title="Агенты"
			description="Персональные автономные онлайн ассистенты с искусственным интеллектом, которые могут дообучаться и адаптироваться к вашим потребностям."
			href="/agents"
			class="bg-clip-padding"
		>
			<div class="relative mx-auto w-fit">
				<Icons.BrandAssets aria-hidden="true" height="96" width="322" />
				<div
					class="absolute inset-0 transition-[box-shadow] delay-0 [box-shadow:_0_0_8px_8px_var(--background-200)_inset] group-hover:[box-shadow:_0_0_8px_8px_var(--background-100)_inset]"
				></div>
			</div>
		</IntroductionLink>
		<IntroductionLink
			title="Чат с моделями"
			description="для работы с мультимедиа и документами, создавая уникальную базу знаний для обучения персональных ассистентов."
			href="https://ui.portalos.ru"
		>
			<div class="flex justify-between">
				{#each preview_colors as color}
					<div
						class="flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full border border-gray-alpha-400 bg-background-200"
					>
						<div class="h-[72px] w-2 rounded-full" style="background: var({color});"></div>
					</div>
				{/each}
			</div>
		</IntroductionLink>
		<IntroductionLink
			title="Звонки и чат"
			description="бесплатный аналог Zoom/WA/TG со встроенными ИИ-агентами"
			href="/snippet"
		>
		<div class="flex justify-between">
				{#each preview_colors1 as color}
					<div
						class="flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full border border-gray-alpha-400 bg-background-200"
					>
						<div class="h-[72px] w-2 rounded-full" style="background: var({color});"></div>
					</div>
				{/each}
			</div>
		</IntroductionLink>
		
	</section>
</PageWrapper>
