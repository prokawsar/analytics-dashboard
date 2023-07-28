<script>
	import Line from '$lib/charts/line.svelte';
	import RatingTable from '$lib/elements/ratingTable.svelte';
</script>

<div class="flex flex-row gap-1">
	<div class="w-8/12 bg-gray-600 rounded-md text-white p-2">
		Google Ratings and Reviews
		<div class="h-80">
			<Line />
		</div>
	</div>
	<div class="w-1/3 bg-gray-600 rounded-md p-2 text-white">
		<p class="font-bold">Google Ratings</p>

		<RatingTable />
	</div>
</div>
