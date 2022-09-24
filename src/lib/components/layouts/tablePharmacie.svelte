<script lang="ts">
	const dummyData = [
		{
			id: 'id',
			nom: 'Name 1',

			adresse: 'Adresse 1',
			tele: 'Télé 1'
		},
		{
			id: 'id',
			nom: 'Name 2',

			adresse: 'Adresse 2',
			tele: 'Télé 2'
		},
		{
			id: 'id',
			nom: 'Name 3',

			adresse: 'Adresse 3',
			tele: 'Télé 3'
		},
		{
			id: 'id',
			nom: 'Name 4',

			adresse: 'Adresse 4',
			tele: 'Télé 4'
		},
		{
			id: 'id',
			nom: 'Name 5',

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
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</thead>
		<tbody>
			{#each dummyData as itemData}
				<tr>
					<th />
					<th>
						{itemData.id}
					</th>
					<td>
						{itemData.nom}
					</td>
					<td> {itemData.adresse} </td>
					<td> {itemData.tele} </td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th />
				<th>ID</th>
				<th>Nom</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</tfoot>
	</table>
</div>
