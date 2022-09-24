<script lang="ts">
	const dummyData = [
		{
			id: 'id',
			status: 'Status 1',
			agentMatricule: 'agent id'
		},
		{
			id: 'id',
			status: 'Status 2',
			agentMatricule: 'agent id'
		},
		{
			id: 'id',
			status: 'Status 3',
			agentMatricule: 'agent id'
		},
		{
			id: 'id',
			status: 'Status 4',
			agentMatricule: 'agent id'
		},
		{
			id: 'id',
			status: 'Status 5',
			agentMatricule: 'agent id'
		}
	];
</script>

<div class="overflow-x-auto">
	<table class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>ID</th>
				<th>Matricule Agent</th><th>Status</th>
			</tr>
		</thead>
		<tbody>
			{#each dummyData as itemData}
				<tr>
					<th />
					<th>
						{itemData.id}
					</th>
					<td> {itemData.agentMatricule} </td>
					<td>
						{itemData.status}
					</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th />
				<th>ID</th>
				<th>Matricule Agent</th> <th>Status</th>
			</tr>
		</tfoot>
	</table>
</div>
