<script>
	import Footer from '$lib/elements/footer.svelte';
	import Nav from '$lib/elements/nav.svelte';
	import '../../app.css';

	import { browser } from '$app/environment';
	import posthog from 'posthog-js';
	import { page } from '$app/stores';

	$: $page.url.pathname, browser && posthog.capture('$pageview', { dashboard: true });
</script>

<div class="bg-slate-800">
	<Nav />

	<slot />

	<Footer />
</div>
