<script>
	import RatingTable from '$lib/elements/ratingTable.svelte';
</script>

<div class="flex flex-row gap-1">
	<div class="w-8/12 bg-gray-600 h-40 rounded-md text-white p-2">Charts.js</div>
	<div class="w-1/3 bg-gray-600 rounded-md p-2 text-white">
		<p class="font-bold">Google Ratings</p>

		<RatingTable />
	</div>
</div>
