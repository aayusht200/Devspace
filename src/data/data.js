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
        releaseMonth: 'April',
        synopsis:
            'Introduces Violet Sorrengail as she is forced into the lethal Riders Quadrant, bonds with two dragons, and encounters the shadow-wielding Xaden Riorson.',
        currentPage: 517,
        totalPage: 517,
        author: 'Rebecca Yarros',
    },
    '550e8400-e29b-41d4-a716-446655440000': {
        title: 'Iron Flame',
        releaseYear: 2023,
        releaseMonth: 'November',
        synopsis: `Follows Violet's grueling second year at Basgiath as the looming political and magical threats outside Navarre's borders intensify.`,
        currentPage: 260,
        totalPage: 640,
        author: 'Rebecca Yarros',
    },
    'daf42344-49a7-470c-af62-f103f9646c8f': {
        title: 'Onyx Storm',
        releaseYear: 2025,
        releaseMonth: 'January',
        synopsis: `The stakes escalate significantly following the shocking, game-changing twist ending of Iron Flame.`,
        currentPage: 0,
        totalPage: 544,
        author: 'Rebecca Yarros',
    },
};

export { pomodoroMode, bookData };
