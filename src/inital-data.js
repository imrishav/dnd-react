const intialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Course 1123' },
    'task-2': { id: 'task-2', content: 'Course 1234' },
    'task-3': { id: 'task-3', content: 'Course 14566' },
    'task-4': { id: 'task-4', content: 'Course 15454' },
    'task-5': { id: 'task-5', content: 'Course 15454' },
    'task-6': { id: 'task-6', content: 'Course 15454' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Semester 1',
      taskIds: []
    },
    'column-2': {
      id: 'column-2',
      title: 'Semester 2',
      taskIds: []
    },
    'column-3': {
      id: 'semester 3',
      title: 'Courses',
      taskIds: ['task-6', 'task-5']
    },
     'column-4': {
      id: 'column-4',
      title: 'Courses',
      taskIds: ['task-6', 'task-5']
    }
  },

  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default intialData
