import { randomId } from '../helperFunctions/functions';

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
        synopsis:
            'Introduces Violet Sorrengail as she is forced into the lethal Riders Quadrant, bonds with two dragons, and encounters the shadow-wielding Xaden Riorson.',
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
const ProjectData = {
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
                taskDescription: 'Create a clock component with current time & date.',
                taskStatus: 'closed',
            },
            {
                id: 'DevSpace-2',
                title: 'pomodor timer',
                startDate: '2026-05-26',
                taskDescription: 'Create a pomodoro style timer with pomodoro time, short break, long breaks.',
                taskStatus: 'closed',
            },
            {
                id: 'DevSpace-3',
                title: 'reading list',
                startDate: '2026-05-26',
                taskDescription: 'Create a reading list tracker',
                taskStatus: 'closed',
            },
        ],
    },
};
export { pomodoroMode, bookData, ProjectData };
