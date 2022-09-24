<script lang="ts">
	export let medecinsList: any[];
	const dummyData = [
		{
			id: 'id',
			nom: 'Name 1',
			prenom: 'First Name 1',
			speciality: 'Spécialité',
			adresse: 'Adresse 1',
			tele: 'Télé 1'
		},
		{
			id: 'id',
			nom: 'Name 2',
			prenom: 'First Name 2',
			speciality: 'Spécialité',
			adresse: 'Adresse 2',
			tele: 'Télé 2'
		},
		{
			id: 'id',
			nom: 'Name 3',
			prenom: 'First Name 3',
			speciality: 'Spécialité',
			adresse: 'Adresse 3',
			tele: 'Télé 3'
		},
		{
			id: 'id',
			nom: 'Name 4',
			prenom: 'First Name 4',
			speciality: 'Spécialité',
			adresse: 'Adresse 4',
			tele: 'Télé 4'
		},
		{
			id: 'id',
			nom: 'Name 5',
			prenom: 'First Name 5',
			speciality: 'Spécialité',
			adresse: 'Adresse 5',
			tele: 'Télé 5'
		}
	];
</script>

<div class="overflow-x-auto">
	<table class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>ID</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Spécialité</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</thead>
		<tbody>
			{#each medecinsList as itemData}
				<tr>
					<th />
					<th>
						{itemData._id}
					</th>
					<td>
						{itemData.nom}
					</td>
					<td> {itemData.prenom} </td>
					<td> {itemData.speciality} </td>
					<td> {itemData.address} </td>
					<td> {itemData.tele} </td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th />
				<th>ID</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Spécialité</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</tfoot>
	</table>
</div>
