<script>
	import BusinessRating from '$lib/components/businessRating.svelte';
	import BusinessReviews from '$lib/components/businessReviews.svelte';
	import BusinessStats from '$lib/components/businessStats.svelte';
</script>

<svelte:head>
	<title>Dashboard starter</title>
</svelte:head>

<div class="container mx-auto flex flex-col gap-1 mt-5 px-1 md:px-0">
	<div>
		<BusinessStats />
	</div>

	<div class="">
		<BusinessRating />
	</div>
	<div class="">
		<BusinessReviews />
	</div>
</div>
