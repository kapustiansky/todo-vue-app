import { defineStore } from 'pinia';

export const useUserData = defineStore({
	id: 'user',
	state: () => ({
		username: '',
	}),
	actions: {
		changeUser(name) {
			this.username = name;
		},
	},
});
