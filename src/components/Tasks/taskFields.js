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

export const emptyTask = {
      title: '',
      description: '',
      status: 'pending',
      category: 'project',
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
export const categoryContext = {
      label: 'Category',
      name: 'category',
      type: 'select',
      options: ['all', 'project', 'personal', 'fitness'],
};
