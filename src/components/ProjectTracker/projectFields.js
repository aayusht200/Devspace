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
export const projectFields = {
      title: {
            label: 'Title',
            name: 'title',
            type: 'text',
            required: true,
      },
      description: {
            label: 'Description',
            name: 'description',
            type: 'textarea',
            required: true,
      },
      startDate: {
            label: 'Start Date',
            name: 'startDate',
            type: 'date',
      },
      endDate: {
            label: 'End Date',
            name: 'endDate',
            type: 'date',
      },
      status: {
            label: 'Status',
            name: 'status',
            type: 'select',
            options: ['open', 'pending', 'completed'],
      },
      tasks: {
            label: 'Tasks',
            name: 'tasks',
            type: 'array',
      },
};
export const emptyProject = {
      title: '',
      description: '',
      status: 'pending',
      startDate: `${date.year}-${date.month}-${date.date}`,
      endDate: 'current',
      tasks: [],
};
export const emptyTask = {
      title: ``,
      taskDescription: ``,
      taskStatus: `open`,
      startDate: `${date.year}-${date.month}-${date.date}`,
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
