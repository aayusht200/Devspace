export const taskColumns = [
      { header: 'Title', accessor: 'title' },
      { header: 'Description', accessor: 'description' },
      {
            header: 'Status',
            accessor: 'status',
            render: (value) => <span>{value}</span>,
      },
      { header: 'Category', accessor: 'category' },
];
