<script lang="ts">
	import { Modal } from '.';

	export let id: string, image: string, title: string;
</script>

<div class="card card-compact bg-base-100 shadow-xl">
	<figure><img src={image} class="w-20" alt={title} /></figure>
	<div class="card-body text-center">
		<h2 class="text-2xl font-semibold w-full text-center">{title}</h2>
		<div class="card-actions justify-center mt-8 ">
			<label for="my-modal-{title}" class="btn modal-button bg-[#f90504] btn-primary">Ajouter</label
			>
			<a href="/consultation/{title}"> <button class="btn bg-[#646464]">Consulter</button></a>
		</div>
	</div>
</div>

<Modal {title} />
