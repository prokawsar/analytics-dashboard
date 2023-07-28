<script>
	export let rating = 0;
	export let title = '';
	export let type = '';
	export let changeValue = -1;

	let updown = Math.random() * (5 - 3 + 1) + 3;
	$: textColor = changeValue > 0 ? 'text-green-500' : 'text-orange-600';
	$: sign = changeValue > 0 ? '+' : '-';
</script>

<div
	class="hover:outline outline-1 outline-blue-400 py-10 px-12 text-center rounded-md bg-gray-600 text-white flex flex-col grow">
	<p class="text-3xl font-bold">{rating}</p>
	<p class="text-sm font-bold">{title}</p>
	{#if type}
		<p class="text-sm text-gray-400 mt-2">
			<span class="{textColor} font-bold">{sign} {changeValue && Math.abs(changeValue)}% </span>
			was {updown.toFixed(2)} last {type}
		</p>
	{/if}
</div>
