<script>
	import Doughnut from '$lib/charts/doughnut.svelte';
	import ReviewsTable from '$lib/elements/reviewsTable.svelte';
</script>

<div class="flex flex-row gap-1">
	<div class="w-3/5 bg-gray-600 rounded-md p-2 text-white">
		<p class="font-bold">Google Reviews</p>
		<ReviewsTable />
	</div>
	<div class="w-2/5 bg-gray-600 rounded-md text-white p-2">
		Reviews by Location
		<Doughnut />
	</div>
</div>
