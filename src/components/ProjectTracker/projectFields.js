import { formatDate } from '../../helperFunctions/functions';
const date = formatDate(new Date());
export const taskFields = {
      title: {
            label: 'Title',
            name: 'title',
            type: 'text',
            required: true,
      },
      taskDescription: {
            label: 'Task Description',
            name: 'taskDescription',
            type: 'textarea',
            required: true,
      },
      taskStatus: {
            label: 'Task Status',
            name: 'taskStatus',
            type: 'select',
            options: ['open', 'pending', 'completed'],
      },
      startDate: {
            label: 'Start Date',
            name: 'startDate',
            type: 'date',
      },
};

export const emptyProject = {
      title: '',
      description: '',
      status: 'pending',
      startDate: `${date.year}-${date.month}-${date.day}`,
      endDate: 'current',
      tasks: [],
};
export const emptyTask = {
      title: ``,
      taskDescription: ``,
      taskStatus: `open`,
      startDate: `${date.year}-${date.month}-${date.day}`,
};
export const searchContext = {
      label: 'Search',
      name: 'search',
      type: 'text',
};
export const statusContext = {
      label: 'Status',
      name: 'status',
      type: 'select',
      options: ['all', 'open', 'pending', 'completed'],
};
