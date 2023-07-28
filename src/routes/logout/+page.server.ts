import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
	if (cookies.get('user') == 'true') {
		throw redirect(301, '/dashboard');
	}
};
export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.set('user', 'false');
		throw redirect(302, '/login');
	}
};
