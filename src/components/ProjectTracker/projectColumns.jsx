import Button from '../Button/Button';

export const projectColumns = (navigate) => [
      { header: 'Title', accessor: 'title' },
      { header: 'Description', accessor: 'description' },
      {
            header: 'Status',
            accessor: 'status',
      },
      { header: 'Start Date', accessor: 'startDate' },
      { header: 'End Date', accessor: 'endDate' },
      {
            header: 'Tasks',
            accessor: 'tasks',
            render: (id) => {
                  return (
                        <Button
                              onClick={() => navigate(`/project/${id}/tasks`)}
                              hover="text-projects-accent"
                        >
                              Tasks
                        </Button>
                  );
            },
      },
];

export const taskColumns = [
      {
            header: 'Title',
            accessor: 'title',
      },
      {
            header: 'Task Description',
            accessor: 'taskDescription',
      },
      {
            header: 'Task Status',
            accessor: 'taskStatus',
      },
      {
            header: 'Start Date',
            accessor: 'startDate',
      },
];
