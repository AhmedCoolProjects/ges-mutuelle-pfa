<script lang="ts">
	import { page } from '$app/stores';
	import { TableAgent, TableMedecin, TablePharmacie } from '$lib/components';

	$: title = $page.params.slug;
</script>

<svelte:head>
	<title>
		Consulation {title}
	</title>
</svelte:head>

<h1 class="py-8 text-3xl font-semibold text-center">
	Consulation {title}
</h1>

<header class="flex py-12 items-center justify-center">
	<div class="form-control w-1/2 md:w-1/2">
		<div class="input-group w-full">
			<input type="text" placeholder="Search…" class="input w-full input-bordered" />
			<button class="btn btn-square bg-[#f90504]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		</div>
	</div>
</header>

<main class="px-12">
	{#if title == 'Agent'}
		<TableAgent />
	{:else if title == 'Medecin'}
		<TableMedecin />
	{:else}
		<TablePharmacie />
	{/if}
</main>
