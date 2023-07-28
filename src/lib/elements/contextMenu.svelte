<script>
	export let show = false;
</script>

<div
	class:hidden={!show}
	class="bg-white text-base absolute right-2 z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48">
	<a
		href="#"
		class="text-sm hover:bg-gray-100 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
		>Action</a>
	<a
		href="#"
		class="text-sm hover:bg-gray-100 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
		>Another action</a>
	<a
		href="#"
		class="text-sm hover:bg-gray-100 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
		>Something else here</a>
	<div class="h-0 my-1 border border-solid border-blueGray-100" />
	<form action="/logout?/logout" method="post">
		<div class="hover:bg-gray-100">
			<button
				type="submit"
				class="text-sm py-2 pl-4 text-left font-normal block w-full whitespace-nowrap bg-transparent"
				>Log out</button>
		</div>
	</form>
</div>
