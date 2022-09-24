<script lang="ts">
	const dummyData = [
		{
			matricule: '1',
			nom: 'Name 1',
			prénom: 'First Name 1',
			age: 'Age 1',
			adresse: 'Adresse 1',
			tele: 'Télé 1'
		},
		{
			matricule: '2',
			nom: 'Name 2',
			prénom: 'First Name 2',
			age: 'Age 2',
			adresse: 'Adresse 2',
			tele: 'Télé 2'
		},
		{
			matricule: '3',
			nom: 'Name 3',
			prénom: 'First Name 3',
			age: 'Age 3',
			adresse: 'Adresse 3',
			tele: 'Télé 3'
		},
		{
			matricule: '4',
			nom: 'Name 4',
			prénom: 'First Name 4',
			age: 'Age 4',
			adresse: 'Adresse 4',
			tele: 'Télé 4'
		},
		{
			matricule: '5',
			nom: 'Name 5',
			prénom: 'First Name 5',
			age: 'Age 5',
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
				<th>Matricule</th>
				<th>Nom</th>
				<th>Prénom</th>
				<th>Age</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</thead>
		<tbody>
			{#each dummyData as itemData}
				<tr>
					<th />
					<th>
						{itemData.matricule}
					</th>
					<td>
						{itemData.nom}
					</td>
					<td> {itemData.prénom} </td>
					<td> {itemData.age} </td>
					<td> {itemData.adresse} </td>
					<td> {itemData.tele} </td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th />
				<th>Matricule</th>
				<th>Nom</th>
				<th>Prénom</th>
				<th>Age</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</tfoot>
	</table>
</div>
