<script>
	const sampleLocationData = [
		{
			'Location name': 'Central Park, New York',
			'Google Rating': 4.8,
			'Total Reviews': 1500
		},
		{
			'Location name': 'Eiffel Tower, Paris',
			'Google Rating': 4.6,
			'Total Reviews': 1800
		},
		{
			'Location name': 'Big Ben, London',
			'Google Rating': 4.5,
			'Total Reviews': 1100
		},
		{
			'Location name': 'Tokyo Tower, Tokyo',
			'Google Rating': 4.9,
			'Total Reviews': 1200
		},
		{
			'Location name': 'Brandenburg Gate, Berlin',
			'Google Rating': 4.4,
			'Total Reviews': 1400
		}
		// Add more data objects here if needed
	];
</script>

<table class="w-full text-left mt-2 border-spacing-2">
	<thead>
		<tr class="border-b border-gray-400">
			<th class="text-xs pb-1 text-gray-400"> Location name </th>
			<th class="text-xs pb-1 text-gray-400"> Google Rating </th>
			<th class="text-xs pb-1 text-gray-400"> Total Reviews </th>
		</tr>
	</thead>
	<tbody>
		{#each sampleLocationData as data}
			<tr class="border-b border-gray-400">
				<td class="text-xs py-1"> {data['Location name']} </td>
				<td class="text-xs py-1 flex flex-row gap-1 items-center">
					<div>{data['Google Rating']}</div>
					<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
						<div
							class="bg-blue-400 h-1.5 rounded-full dark:bg-blue-500"
							style="width: {(data['Google Rating'] / 5.0) * 100}%" />
					</div>
				</td>
				<td class="text-xs p-1">
					<div class="flex flex-row items-center gap-1">
						<div>
							{data['Total Reviews']}
						</div>
						<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
							<div
								class="bg-blue-400 h-1.5 rounded-full dark:bg-blue-500"
								style="width: {(data['Total Reviews'] / 2000) * 100}%" />
						</div>
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
