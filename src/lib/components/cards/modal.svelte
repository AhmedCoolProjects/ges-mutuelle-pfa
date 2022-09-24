<script lang="ts">
	export let title: string;
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-{title}" class="modal-toggle" />
<label for="my-modal-{title}" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<h3 class="text-lg font-bold">Ajouter un {title}</h3>

		{#if title == 'Agent'}
			<div class="form-control mt-4 w-full ">
				<label for="" class="label">
					<span class="label-text">Matricule?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Nom?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Prénom?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Age?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Adresse?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Téléphone?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
			</div>
		{:else if title == 'Medecin'}
			<div class="form-control mt-4 w-full ">
				<label for="" class="label">
					<span class="label-text">Nom?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Prénom?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Adresse?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Spécialité?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Téléphone?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
			</div>
		{:else}
			<div class="form-control mt-4 w-full ">
				<label for="" class="label">
					<span class="label-text">Nom?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Adresse?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<label for="" class="label">
					<span class="label-text">Téléphone?</span>
				</label>
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
			</div>
		{/if}
		<div class="justify-end py-4 flex flex-row items-center ">
			<button class="btn bg-[#f90504] "> Ajouter </button>
		</div>
	</label>
</label>
