export const taskFields = {
      title: {
            label: 'Title',
            name: 'title',
            type: 'text',
      },
      description: {
            label: 'Description',
            name: 'description',
            type: 'textarea',
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
