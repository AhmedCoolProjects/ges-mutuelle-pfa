<svelte:head>
	<title>Création Dossier</title>
</svelte:head>

<main class=" px-4 md:px-48">
	<div class="form-control mt-4 w-full ">
		<div class="form-control w-1/4">
			<label class="label cursor-pointer">
				<span class="label-text">Medecin</span>
				<input type="radio" name="radio-6" class="radio checked:bg-red-500" />
			</label>
			<label class="label cursor-pointer">
				<span class="label-text">Pharmacie</span>
				<input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
			</label>
		</div>

		<label for="" class="label">
			<span class="label-text">Nom (Medecin / Pharmacie)?</span>
		</label>
		<input type="text" placeholder="Type here" class="input input-bordered w-full" />
		<label for="" class="label">
			<span class="label-text">Maladie?</span>
		</label>
		<input type="text" placeholder="Type here" class="input input-bordered w-full" />
		<label for="" class="label">
			<span class="label-text">Montant Payé?</span>
		</label>
		<input type="text" placeholder="Type here" class="input input-bordered w-full" />

		<label for="" class="label">
			<span class="label-text">Matricule Agent?</span>
		</label>
		<input type="text" placeholder="Type here" class="input input-bordered w-full" />
	</div>

	<div class="flex flex-row items-center py-4 justify-end">
		<button class="btn bg-[#f90504] "> Créer </button>
	</div>
</main>
