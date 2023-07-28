<script>
	import Line from '$lib/charts/line.svelte';
	import RatingTable from '$lib/elements/ratingTable.svelte';
</script>

<div class="flex flex-col md:flex-row gap-1">
	<div class="md:w-8/12 bg-gray-600 rounded-md text-white p-2">
		Google Ratings and Reviews
		<div class="h-80">
			<Line />
		</div>
	</div>
	<div class="md:w-1/3 bg-gray-600 rounded-md p-2 text-white">
		<p class="">Google Ratings</p>

		<RatingTable />
	</div>
</div>
