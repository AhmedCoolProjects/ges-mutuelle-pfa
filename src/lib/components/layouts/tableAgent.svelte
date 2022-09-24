<script lang="ts">
	export let agentsList: any[];
</script>

<div class="overflow-x-auto">
	<table class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>Matricule</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Age</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</thead>
		<tbody>
			{#each agentsList as itemData}
				<tr>
					<th />
					<th>
						{itemData.matricule}
					</th>
					<td>
						{itemData.nom}
					</td>
					<td> {itemData.prenom} </td>
					<td> {itemData.age} </td>
					<td> {itemData.address} </td>
					<td> {itemData.tele} </td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th />
				<th>Matricule</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Age</th>
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</tfoot>
	</table>
</div>
