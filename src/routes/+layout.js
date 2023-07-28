// src/routes/+layout.js
import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		console.log('posthog from layout');
		posthog.init('phc_2Y4QVAra4G225xjuExx65N3S7TkZRz4I4CXNXMqoQPf', {
			api_host: 'https://app.posthog.com'
		});
	}
	return;
};
