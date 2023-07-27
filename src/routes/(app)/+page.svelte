<script>
	import BusinessStats from '$lib/components/businessStats.svelte';
	import Stats from '$lib/elements/stats.svelte';
</script>

<svelte:head>
	<title>Dashboard starter</title>
</svelte:head>

<div class="container mx-auto flex flex-col">
	<div>
		<BusinessStats />
		<!-- <Stats title="Average Google Review" rating={4.56} /> -->
	</div>

	<div>charts</div>
	<div>reviews</div>
</div>
