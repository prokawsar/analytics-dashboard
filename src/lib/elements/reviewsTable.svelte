<script>
	const sampleData = [
		{
			'Review Date': '2023-07-15',
			Location: 'New York',
			'Profile Image': 'profile_images/user1.jpg',
			'Display Name': 'John Doe',
			Rating: 4.5,
			Reviews: 'Excellent experience! The place was amazing, and the staff was very friendly.'
		},
		{
			'Review Date': '2023-07-17',
			Location: 'London',
			'Profile Image': 'profile_images/user2.jpg',
			'Display Name': 'Jane Smith',
			Rating: 3.8,
			Reviews: 'Had a good time overall, but the service could have been better.'
		},
		{
			'Review Date': '2023-07-20',
			Location: 'Paris',
			'Profile Image': 'profile_images/user3.jpg',
			'Display Name': 'Michael Johnson',
			Rating: 4.2,
			Reviews: 'The location was beautiful, but the food was just average.'
		},
		{
			'Review Date': '2023-07-22',
			Location: 'Tokyo',
			'Profile Image': 'profile_images/user4.jpg',
			'Display Name': 'Samantha Lee',
			Rating: 4.9,
			Reviews: "Absolutely loved it! The best place I've ever been to."
		},
		{
			'Review Date': '2023-07-25',
			Location: 'Berlin',
			'Profile Image': 'profile_images/user5.jpg',
			'Display Name': 'David Brown',
			Rating: 4.0,
			Reviews: 'Decent experience, but a bit overpriced for what you get.'
		}
	];
</script>

<table class="w-full text-left mt-2">
	<thead>
		<tr class="border-b border-gray-400">
			<th class="text-xs pb-1 text-gray-400"> Review Date </th>
			<th class="text-xs pb-1 text-gray-400"> Location </th>
			<th class="text-xs pb-1 text-gray-400"> Profile Image </th>
			<th class="text-xs pb-1 text-gray-400"> Display Name </th>
			<th class="text-xs pb-1 text-gray-400"> Rating </th>
			<th class="text-xs pb-1 text-gray-400"> Reviews </th>
		</tr>
	</thead>
	<tbody>
		{#each sampleData as data}
			<tr class="border-b border-gray-400">
				<td class="text-xs px-1 w-[100px]"> {data['Review Date']} </td>
				<td class="text-xs px-1"> {data.Location}</td>
				<td class="text-xs px-1 w-[90px]">
					<span
						class="w-10 h-10 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
						<img
							alt="..."
							class="w-full rounded-full align-middle border-none shadow-lg"
							src="https://i.pravatar.cc/300" />
					</span>
				</td>
				<td class="text-xs px-1 w-[120px]"> {data['Display Name']} </td>
				<td class="text-xs px-1 flex flex-row gap-1 items-center">
					<p>{data.Rating}</p>
					<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
						<div
							class="bg-blue-400 h-1.5 rounded-full dark:bg-blue-500"
							style="width: {(data.Rating / 5.0) * 100}%" />
					</div>
				</td>
				<td class="text-xs px-1 max-w-[100px]"> {data.Reviews} </td>
			</tr>
		{/each}
	</tbody>
</table>
