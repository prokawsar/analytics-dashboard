import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('user') == 'true') {
		throw redirect(302, '/dashboard');
	}
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (email == 'admin@admin.com' && password == 'admin') {
			cookies.set('user', 'true');
			throw redirect(302, '/dashboard');
		} else {
			return fail(400, {
				email,
				password,
				incorrect: true
			});
		}
	}
};
