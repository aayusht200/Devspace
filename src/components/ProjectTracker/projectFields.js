export const taskFields = {
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
      status: {
            label: 'Status',
            name: 'status',
            type: 'select',
            options: ['active', 'pending', 'done'],
      },
      category: {
            label: 'Category',
            name: 'category',
            type: 'select',
            options: ['project', 'personal', 'fitness'],
      },
};

export const emptyProject = {
      title: '',
      description: '',
      status: 'pending',
      startDate: new Date().getDate(),
      endDate: 'current',
      tasks: [],
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
      options: ['all', 'active', 'pending', 'done'],
};
