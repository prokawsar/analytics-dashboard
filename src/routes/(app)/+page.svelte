<script>
	import BusinessRating from '$lib/components/businessRating.svelte';
	import BusinessStats from '$lib/components/businessStats.svelte';
	import Stats from '$lib/elements/stats.svelte';
</script>

<svelte:head>
	<title>Dashboard starter</title>
</svelte:head>

<div class="container mx-auto flex flex-col gap-1">
	<div>
		<BusinessStats />
		<!-- <Stats title="Average Google Review" rating={4.56} /> -->
	</div>

	<div>
		<BusinessRating />
	</div>
	<div>reviews</div>
</div>
