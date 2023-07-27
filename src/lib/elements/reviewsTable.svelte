<script>
	const sampleData = [
		{
			'Review Date': '2023-07-15',
			Location: 'New York',
			'Profile Image': 'profile_images/user1.jpg',
			'Display Name': 'John Doe',
			Rating: 4.5,
			Reviews: 25
		},
		{
			'Review Date': '2023-07-17',
			Location: 'London',
			'Profile Image': 'profile_images/user2.jpg',
			'Display Name': 'Jane Smith',
			Rating: 3.8,
			Reviews: 12
		},
		{
			'Review Date': '2023-07-20',
			Location: 'Paris',
			'Profile Image': 'profile_images/user3.jpg',
			'Display Name': 'Michael Johnson',
			Rating: 4.2,
			Reviews: 18
		},
		{
			'Review Date': '2023-07-22',
			Location: 'Tokyo',
			'Profile Image': 'profile_images/user4.jpg',
			'Display Name': 'Samantha Lee',
			Rating: 4.9,
			Reviews: 37
		},
		{
			'Review Date': '2023-07-25',
			Location: 'Berlin',
			'Profile Image': 'profile_images/user5.jpg',
			'Display Name': 'David Brown',
			Rating: 4.0,
			Reviews: 9
		}
	];
</script>

<table class="w-full text-left mt-2">
	<thead>
		<th class="text-xs text-gray-400"> Review Date </th>
		<th class="text-xs text-gray-400"> Location </th>
		<th class="text-xs text-gray-400"> Profile Image </th>
		<th class="text-xs text-gray-400"> Display Name </th>
		<th class="text-xs text-gray-400"> Rating </th>
		<th class="text-xs text-gray-400"> Reviews </th>
	</thead>
	<tbody>
		{#each sampleData as data}
			<tr class="">
				<td class="text-xs"> {data['Review Date']} </td>
				<td class="text-xs"> {data.Location}</td>
				<td class="text-xs">{data['Profile Image']} </td>
				<td class="text-xs"> {data['Display Name']} </td>
				<td class="text-xs"> {data.Rating} </td>
				<td class="text-xs"> {data.Reviews} </td>
			</tr>
		{/each}
	</tbody>
</table>
