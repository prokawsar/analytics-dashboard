<script>
	import Stats from '$lib/elements/stats.svelte';

	let stats = [
		{ title: 'Average Google Review' },
		{ title: 'Google Rating (WoW)', type: 'week' },
		{ title: 'Google Rating (MoM)', type: 'month' },
		{ title: 'Google Rating (YoY)', type: 'year' },
		{ title: 'NPS Score' }
	];
</script>

<div class="flex flex-row gap-1">
	{#each stats as card}
		<Stats title={card.title} type={card.type} rating={4.56} />
	{/each}
</div>
