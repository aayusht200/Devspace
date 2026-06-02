const pomodoroMode = {
	pomodoro: {
		mode: `pomodoro`,
		totalSeconds: 1500,
		isRunning: false,
	},
	short: {
		mode: `short`,
		totalSeconds: 300,
		isRunning: false,
	},
	long: {
		mode: `long`,
		totalSeconds: 600,
		isRunning: false,
	},
};
const bookData = {
	'fe59bc14-969e-4767-8aa5-693ec48b9eb9': {
		title: 'Fourth Wing',
		releaseYear: 2023,
		releaseMonth: 'april',
		synopsis: 'Introduces Violet Sorrengail as she is forced into the lethal Riders Quadrant, bonds with two dragons, and encounters the shadow-wielding Xaden Riorson.',
		currentPage: 517,
		totalPage: 517,
		author: 'Rebecca Yarros',
	},
	'550e8400-e29b-41d4-a716-446655440000': {
		title: 'Iron Flame',
		releaseYear: 2023,
		releaseMonth: 'november',
		synopsis: `Follows Violet's grueling second year at Basgiath as the looming political and magical threats outside Navarre's borders intensify.`,
		currentPage: 260,
		totalPage: 640,
		author: 'Rebecca Yarros',
	},
	'daf42344-49a7-470c-af62-f103f9646c8f': {
		title: 'Onyx Storm',
		releaseYear: 2025,
		releaseMonth: 'january',
		synopsis: `The stakes escalate significantly following the shocking, game-changing twist ending of Iron Flame.`,
		currentPage: 0,
		totalPage: 544,
		author: 'Rebecca Yarros',
	},
};
const projectData = {
	'ae01f519-a68e-44b3-8de0-b52cdb7e4522': {
		title: 'DevSpace',
		startDate: '2026-05-26',
		endDate: 'current',
		status: 'active',
		description:
			'DevSpace is a large-scale React application focused on productivity and developer workflow management.',
		tasks: [
			{
				id: 'DevSpace-1',
				title: 'Clock Component',
				startDate: '2026-05-26',
				taskDescription:
					'Create a clock component with current time & date.',
				taskStatus: 'completed',
			},
			{
				id: 'DevSpace-2',
				title: 'pomodor timer',
				startDate: '2026-05-26',
				taskDescription:
					'Create a pomodoro style timer with pomodoro time, short break, long breaks.',
				taskStatus: 'completed',
			},
			{
				id: 'DevSpace-3',
				title: 'reading list',
				startDate: '2026-05-26',
				taskDescription: 'Create a reading list tracker',
				taskStatus: 'completed',
			},
			{
				id: 'DevSpace-4',
				title: 'project display',
				startDate: '2026-05-26',
				taskDescription:
					'Create a project display which shows status and a status bar with percentage of open projects',
				taskStatus: 'open',
			},
		],
	},
	'bb12c729-b42d-4d31-91f7-7cb5a8d41234': {
		title: 'Memory Game',
		startDate: '2026-05-28',
		endDate: '2026-05-28',
		status: 'active',
		description:
			'A fun and interactive memory card game built with React and Vite. Test your memory skills by matching pairs of cards!',
		tasks: [
			{
				id: 'MemoryGame-1',
				title: 'game setup',
				startDate: '2026-05-28',
				taskDescription:
					'Setup React and Vite project structure with reusable components.',
				taskStatus: 'completed',
			},
			{
				id: 'MemoryGame-2',
				title: 'memory card logic',
				startDate: '2026-05-28',
				taskDescription:
					'Build interactive memory card matching gameplay with score tracking.',
				taskStatus: 'completed',
			},
			{
				id: 'MemoryGame-3',
				title: 'difficulty levels',
				startDate: '2026-05-28',
				taskDescription:
					'Implement easy, medium, and hard difficulty modes.',
				taskStatus: 'completed',
			},
			{
				id: 'MemoryGame-4',
				title: 'responsive ui',
				startDate: '2026-05-28',
				taskDescription:
					'Create responsive layout with smooth animations and transitions.',
				taskStatus: 'open',
			},
			{
				id: 'MemoryGame-5',
				title: 'deployment',
				startDate: '2026-05-28',
				taskDescription:
					'Deploy completed project to Netlify for live preview.',
				taskStatus: 'open',
			},
		],
	},
};

const tasksData = {
	'04d87b1b-fb43-4fbb-bf70-6143afd52046': {
		title: 'Build Task Tracker',
		description: 'Create task project component',
		status: 'active',
		category: 'project',
	},
	'c71e00cd-497a-4981-9bcf-138e4cd0a420': {
		title: 'Refactor Pomodoro Timer',
		description: 'Move timer persistence into custom hook',
		status: 'pending',
		category: 'project',
	},
	'caa8488e-d311-4ea1-bf65-1e530905dba6': {
		title: 'Complete Push Day Workout',
		description: 'Chest, shoulders, and triceps session',
		status: 'done',
		category: 'fitness',
	},
	'a845b7e4-1ad6-4cd5-b633-434e796be10b': {
		title: 'Read Atomic Habits',
		description: 'Finish chapter on habit stacking',
		status: 'active',
		category: 'personal',
	},
	'd6dd24c3-ce73-487f-b830-be3128097f1e': {
		title: 'Add Project Status Filters',
		description: 'Implement filtering by active and completed tasks',
		status: 'pending',
		category: 'project',
	},
	'aa539815-2686-44e5-b120-ec0a203445fa': {
		title: 'Morning Cardio Session',
		description: '30 minutes incline treadmill walk',
		status: 'done',
		category: 'fitness',
	},
	'4e9e1387-1dbd-40c8-8d17-32513b6516ad': {
		title: 'Organize Component Structure',
		description: 'Separate dashboard widgets into reusable folders',
		status: 'active',
		category: 'project',
	},
	'e8d89e96-0dba-40c1-b760-39b4b25af923': {
		title: 'Plan Weekly Schedule',
		description: 'Prepare upcoming study and gym schedule',
		status: 'pending',
		category: 'personal',
	},
};
const dayNames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
export { pomodoroMode, bookData, projectData, tasksData, dayNames, monthNames };
