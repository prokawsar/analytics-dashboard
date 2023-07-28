<script>
	import Footer from '$lib/elements/footer.svelte';
	import Nav from '$lib/elements/nav.svelte';
	import '../../app.css';
</script>

<div class="bg-slate-800">
	<Nav />

	<slot />

	<Footer />
</div>
