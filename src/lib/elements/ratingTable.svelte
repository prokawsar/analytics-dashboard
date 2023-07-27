<script>
	const sampleLocationData = [
		{
			'Location name': 'Central Park, New York',
			'Google Rating': 4.8,
			'Total Reviews': 2500
		},
		{
			'Location name': 'Eiffel Tower, Paris',
			'Google Rating': 4.6,
			'Total Reviews': 1800
		},
		{
			'Location name': 'Big Ben, London',
			'Google Rating': 4.5,
			'Total Reviews': 2100
		},
		{
			'Location name': 'Tokyo Tower, Tokyo',
			'Google Rating': 4.9,
			'Total Reviews': 3200
		},
		{
			'Location name': 'Brandenburg Gate, Berlin',
			'Google Rating': 4.4,
			'Total Reviews': 1400
		}
		// Add more data objects here if needed
	];
</script>

<table class="w-full text-left mt-2">
	<thead>
		<th class="text-xs text-gray-400"> Location name </th>
		<th class="text-xs text-gray-400"> Google Rating </th>
		<th class="text-xs text-gray-400"> Total Reviews </th>
	</thead>
	<tbody>
		{#each sampleLocationData as data}
			<tr>
				<td class="text-xs"> {data['Location name']} </td>
				<td class="text-xs"> {data['Google Rating']} </td>
				<td class="text-xs"> {data['Total Reviews']} </td>
			</tr>
		{/each}
	</tbody>
</table>
