<script>
	import '../../app.css';
	import { browser } from '$app/environment';
	import posthog from 'posthog-js';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';

	$: $page.url.pathname, browser && posthog.capture('$pageview', { loginpage: true });

	export let form;

	onMount(() => {
		if (browser) {
			import('$lib/utils/tooltip');
		}
	});
</script>

<svelte:head>
	<title>Login | Dashboard</title>
</svelte:head>

<div class="h-screen flex items-center">
	<div class="container mx-auto px-4 h-full">
		<div class="flex content-center items-center justify-center h-full">
			<div class="w-full lg:w-4/12 px-4">
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
					<div class="rounded-t mb-0 px-6 py-6">
						<div class="text-center mb-3">
							<h6 class="text-gray-500 text-sm font-bold">Sign in with</h6>
						</div>
						<div class="btn-wrapper text-center">
							<button
								class="bg-white active:bg-gray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
								type="button"
								disabled>
								<img
									alt="..."
									class="w-5 mr-1"
									src="https://demos.creative-tim.com/notus-svelte/assets/img/github.svg" />
								Github</button>
							<button
								class="bg-white active:bg-gray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
								type="button"
								disabled>
								<img
									alt="..."
									class="w-5 mr-1"
									src="https://demos.creative-tim.com/notus-svelte/assets/img/google.svg" />
								Google</button>
						</div>
						<hr class="mt-6 border-b-1 border-gray-300" />
					</div>
					<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
						<div class="text-gray-400 flex flex-col gap-1 text-center mb-3 font-bold">
							{#if form?.incorrect}
								<small class="text-red-400 p-2 outline-dashed outline-1">
									Incorrect email or password
								</small>
							{/if}
							<small>Or sign in with credentials</small>
						</div>
						<form method="post" action="?/login">
							<div class="relative w-full mb-3">
								<label class="block uppercase text-gray-600 text-xs font-bold mb-2" for="grid-email"
									>Email</label>
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="off"
									class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Email" />
							</div>

							<div class="relative w-full mb-3">
								<label
									class="block uppercase text-gray-600 text-xs font-bold mb-2"
									for="grid-password">Password</label>
								<input
									id="password"
									name="password"
									type="password"
									class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Password" />
							</div>
							<div>
								<label class="inline-flex items-center cursor-pointer"
									><input
										id="customCheckLogin"
										type="checkbox"
										class="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
									<span class="ml-2 text-sm font-semibold text-gray-600">Remember me</span></label>
							</div>

							<div class="text-center mt-6">
								<button
									class="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
									type="submit">Sign In</button>
							</div>
						</form>
					</div>

					<div
						class="absolute flex flex-row gap-2 items-center right-2 top-2 cursor-pointer"
						data-tippy="Creds <br />Email: admin@admin.com <br/>Pass: admin">
						<span class="text-xs text-gray-400">Hover me</span>
						<Fa icon={faInfoCircle} />
					</div>
				</div>
				<div class="flex flex-wrap mt-6 relative">
					<div class="w-1/2">
						<a href="#" class=""><small>Forgot password?</small></a>
					</div>
					<div class="w-1/2 text-right">
						<a href="/register" class=""><small>Create new account</small></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
