export const taskFields = [
      {
            label: 'Title',
            name: 'title',
            type: 'text',
      },
      {
            label: 'Description',
            name: 'description',
            type: 'textarea',
      },
      {
            label: 'Status',
            name: 'status',
            type: 'select',
            options: ['active', 'pending', 'done'],
      },
      {
            label: 'Category',
            name: 'category',
            type: 'select',
            options: ['project', 'personal', 'fitness'],
      },
];
