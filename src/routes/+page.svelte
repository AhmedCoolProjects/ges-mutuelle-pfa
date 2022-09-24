<script lang="ts">
	import { HomeCard } from '$lib/components';
	const homeData = [
		{
			id: '1',
			title: 'Agent',
			description: 'This is a description',
			image: '/agent.png'
		},
		{
			id: '2',
			title: 'Medecin',
			image: '/medcin.png',
			description: 'This is a description'
		},
		{
			id: '3',
			title: 'Pharmacie',
			image: '/pharmacy.png',
			description: 'This is a description'
		}
	];
</script>

<svelte:head>
	<title>AMENDIS MUTUELLE</title>
</svelte:head>

<h1 class="text-4xl mt-24 font-semibold text-center">Gestion de Mutuelle</h1>

<main class="grid px-4 py-12 mt-16 md:px-12 grid-cols-1 md:grid-cols-3 gap-4">
	{#each homeData as { id, image, title }}
		<HomeCard {id} {image} {title} />
	{/each}
</main>
