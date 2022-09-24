<script lang="ts">
	export let pharmaciesList: any[];
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
			{#each pharmaciesList as itemData}
				<tr>
					<th />
					<th>
						{itemData._id}
					</th>
					<td>
						{itemData.nom}
					</td>
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
				<th>Adresse</th>
				<th>Téléphone</th>
			</tr>
		</tfoot>
	</table>
</div>
