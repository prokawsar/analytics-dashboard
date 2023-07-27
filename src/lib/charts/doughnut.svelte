<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	let canvasRef: HTMLCanvasElement;
	let chart;

	const data = {
		labels: ['Red', 'Blue', 'Yellow'],
		datasets: [
			{
				label: 'Sample label',
				data: [300, 50, 100],
				backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
				hoverOffset: 4
			}
		]
	};

	const createChart = () => {
		chart = new Chart(canvasRef, {
			type: 'doughnut',
			data: data,
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'left',
						labels: {
							color: 'White'
						}
					},
					title: {
						display: true,
						text: 'Chart.js Doughnut Chart',
						color: 'White'
					}
				}
			}
		});
	};

	onMount(() => {
		createChart();
	});
</script>

<canvas id="chart" bind:this={canvasRef} />
