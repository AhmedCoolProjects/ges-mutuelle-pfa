<script lang="ts">
	// @ts-ignore
	// @ts-nocheck
	export let title: string;
	import httpCommun from '$lib/utils/axios-custom';

	let agentInputs = {
		matricule: '',
		nom: '',
		prenom: '',
		age: 0,
		address: '',
		tele: ''
	};
	let medecinInputs = {
		nom: '',
		prenom: '',
		speciality: '',
		address: '',
		tele: ''
	};
	let pharmacyInputs = {
		nom: '',
		address: '',
		tele: ''
	};
	const onChangeInput = (event: Event, objectToChange: any, varToChange: string) => {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		if (value.length > 0) {
			// const number = parseFloat(value);

			switch (objectToChange) {
				case 'agentInputs':
					if (objectToChange == 'age') {
						agentInputs[varToChange] = Number(value);
					} else {
						agentInputs[varToChange] = value;
					}
					break;
				case 'medecinInputs':
					medecinInputs[varToChange] = value;
					break;
				case 'pharmacyInputs':
					pharmacyInputs[varToChange] = value;
					break;
			}
		}
	};
	const addAgent = () => {
		httpCommun
			.post('/agents/add', agentInputs)
			.then((res) => {
				agentInputs = {
					matricule: '',
					nom: '',
					prenom: '',
					age: 0,
					address: '',
					tele: ''
				};
			})
			.catch((er) => {
				console.error('er: ', er);
			});
	};
	const addMedecin = () => {
		httpCommun
			.post('/medecins/add', medecinInputs)
			.then((res) => {
				medecinInputs = {
					nom: '',
					prenom: '',
					speciality: '',
					address: '',
					tele: ''
				};
			})
			.catch((er) => {
				console.error('er: ', er);
			});
	};
	const addPharmacy = () => {
		httpCommun
			.post('/pharmacies/add', pharmacyInputs)
			.then((res) => {
				pharmacyInputs = {
					nom: '',
					address: '',
					tele: ''
				};
			})
			.catch((er) => {
				console.error('er: ', er);
			});
	};
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
				<input
					bind:value={agentInputs.matricule}
					on:input={(e) => onChangeInput(e, 'agentInputs', 'matricule')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Nom?</span>
				</label>
				<input
					bind:value={agentInputs.nom}
					on:input={(e) => onChangeInput(e, 'agentInputs', 'nom')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Prénom?</span>
				</label>
				<input
					bind:value={agentInputs.prenom}
					on:input={(e) => onChangeInput(e, 'agentInputs', 'prenom')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Age?</span>
				</label>
				<input
					bind:value={agentInputs.age}
					on:input={(e) => onChangeInput(e, 'agentInputs', 'age')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Adresse?</span>
				</label>
				<input
					bind:value={agentInputs.address}
					on:input={(e) => onChangeInput(e, 'agentInputs', 'address')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Téléphone?</span>
				</label>
				<input
					bind:value={agentInputs.tele}
					on:input={(e) => onChangeInput(e, 'agentInputs', 'tele')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
			</div>
		{:else if title == 'Medecin'}
			<div class="form-control mt-4 w-full ">
				<label for="" class="label">
					<span class="label-text">Nom?</span>
				</label>
				<input
					bind:value={medecinInputs.nom}
					on:input={(e) => onChangeInput(e, 'medecinInputs', 'nom')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Prénom?</span>
				</label>
				<input
					bind:value={medecinInputs.prenom}
					on:input={(e) => onChangeInput(e, 'medecinInputs', 'prenom')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Adresse?</span>
				</label>
				<input
					bind:value={medecinInputs.address}
					on:input={(e) => onChangeInput(e, 'medecinInputs', 'address')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Spécialité?</span>
				</label>
				<input
					bind:value={medecinInputs.speciality}
					on:input={(e) => onChangeInput(e, 'medecinInputs', 'speciality')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Téléphone?</span>
				</label>
				<input
					bind:value={medecinInputs.tele}
					on:input={(e) => onChangeInput(e, 'medecinInputs', 'tele')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
			</div>
		{:else}
			<div class="form-control mt-4 w-full ">
				<label for="" class="label">
					<span class="label-text">Nom?</span>
				</label>
				<input
					bind:value={pharmacyInputs.nom}
					on:input={(e) => onChangeInput(e, 'pharmacyInputs', 'nom')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Adresse?</span>
				</label>
				<input
					bind:value={pharmacyInputs.address}
					on:input={(e) => onChangeInput(e, 'pharmacyInputs', 'address')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
				<label for="" class="label">
					<span class="label-text">Téléphone?</span>
				</label>
				<input
					bind:value={pharmacyInputs.tele}
					on:input={(e) => onChangeInput(e, 'pharmacyInputs', 'tele')}
					type="text"
					placeholder="Type here"
					class="input input-bordered w-full"
				/>
			</div>
		{/if}
		<div class="justify-end py-4 flex flex-row items-center ">
			<button
				on:click={title == 'Agent' ? addAgent : title == 'Medecin' ? addMedecin : addPharmacy}
				class="btn bg-[#f90504] "
			>
				Ajouter
			</button>
		</div>
	</label>
</label>
