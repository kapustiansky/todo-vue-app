import { defineStore } from 'pinia';

export const useToDoStore = defineStore({
	id: 'todo',
	state: () => ({
		task: '',
		editedTask: null,
		statuses: ['to-do', 'in-progress', 'finished'],
		tasks: localStorage.getItem('tasks')
			? JSON.parse(localStorage.getItem('tasks'))
			: [
					{
						name: 'Steal bananas from the supermarket.',
						status: 'to-do',
					},
					{
						name: 'Eat 1 kg chocolate in 1 hour.',
						status: 'in-progress',
					},
					{
						name: 'Create YouTube video.',
						status: 'finished',
					},
			  ],
	}),
	actions: {
		changeStatus(index) {
			let newIndex = this.statuses.indexOf(this.tasks[index].status);
			if (++newIndex > 2) newIndex = 0;
			this.tasks[index].status = this.statuses[newIndex];
		},

		deleteTask(index) {
			this.tasks.splice(index, 1);
		},

		editTask(index) {
			this.task = this.tasks[index].name;
			this.editedTask = index;
		},

		submitTask() {
			if (this.task.length === 0) return;

			if (this.editedTask != null) {
				this.tasks[this.editedTask].name = this.task;
				this.editedTask = null;
			} else {
				this.tasks.push({
					name: this.task,
					status: 'to-do',
				});
			}

			this.task = '';
		},

		changeTaskValue(value) {
			this.task = value;
		},
	},
});
