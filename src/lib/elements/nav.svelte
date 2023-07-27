<script>
	import Fa from 'svelte-fa';
	import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
	import ContextMenu from './contextMenu.svelte';
	import Notification from './notification.svelte';
	let openList = false,
		showNotification = false;
</script>

<nav
	class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
	<div
		class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
		<a class=" text-sm uppercase hidden lg:inline-block font-semibold" href="#pablo">Dashboard</a>
		<form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
			<div class="relative flex w-full flex-wrap items-stretch">
				<span
					class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
					<Fa icon={faSearch} />
				</span>

				<input
					type="text"
					placeholder="Search here..."
					class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" />
			</div>
		</form>
		<ul class="flex-col md:flex-row gap-4 list-none items-center hidden md:flex">
			<div>
				<a
					class="cursor-pointer h-12 w-12 flex justify-center items-center"
					on:click={() => (showNotification = !showNotification)}>
					<Fa icon={faBell} />
				</a>
				<Notification bind:show={showNotification} />
			</div>
			<div>
				<a class="text-blueGray-500 block" href="#pablo" on:click={() => (openList = !openList)}>
					<div class="items-center flex">
						<span
							class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
							<img
								alt="..."
								class="w-full rounded-full align-middle border-none shadow-lg"
								src="https://i.pravatar.cc/300" />
						</span>
					</div>
				</a>
				<ContextMenu bind:show={openList} />
			</div>
		</ul>
	</div>
</nav>
