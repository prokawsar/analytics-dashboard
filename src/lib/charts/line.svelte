<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	let canvasRef: HTMLCanvasElement;
	let chart;

	const data = {
		datasets: [
			{
				label: 'Data 1',
				data: [
					{ x: '2017-01-05', y: 35 },
					{ x: '2017-01-10', y: 15 },
					{ x: '2017-01-20', y: 25 },
					{ x: '2017-01-25', y: 30 },
					{ x: '2017-02-02', y: 50 },
					{ x: '2017-02-08', y: 45 },
					{ x: '2017-02-15', y: 5 },
					{ x: '2017-02-22', y: 12 },
					{ x: '2017-03-01', y: 38 },
					{ x: '2017-03-10', y: 22 },
					{ x: '2017-04-01', y: 38 },
					{ x: '2017-04-10', y: 22 },
					{ x: '2017-04-15', y: 5 },
					{ x: '2017-04-22', y: 12 }
				]
			},
			{
				label: 'Data 2',
				data: [
					{ x: '2017-01-05', y: 25 },
					{ x: '2017-01-10', y: 25 },
					{ x: '2017-01-20', y: 35 },
					{ x: '2017-01-25', y: 20 },
					{ x: '2017-02-02', y: 10 },
					{ x: '2017-02-08', y: 35 },
					{ x: '2017-02-15', y: 15 },
					{ x: '2017-02-22', y: 62 },
					{ x: '2017-03-01', y: 58 },
					{ x: '2017-03-10', y: 22 },
					{ x: '2017-04-01', y: 28 },
					{ x: '2017-04-10', y: 12 },
					{ x: '2017-04-15', y: 25 },
					{ x: '2017-04-22', y: 32 }
				]
			}
		]
	};

	const createChart = () => {
		chart = new Chart(canvasRef, {
			type: 'line',
			data: data,
			options: {
				elements: {
					line: {
						tension: 0.5
					},
					point: {
						hoverRadius: 10
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'top',
						labels: {
							color: 'White'
						}
					},
					title: {
						display: true,
						text: 'Chart.js Line Chart',
						color: 'White'
					}
				},
				scales: {
					y: {
						grid: {
							display: false
						},
						ticks: {
							color: 'White'
						}
					},
					x: {
						ticks: {
							color: 'White'
						},
						grid: {
							display: false
						}
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
