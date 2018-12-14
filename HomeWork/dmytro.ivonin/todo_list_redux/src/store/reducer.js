const initialState = {
    currentFilter: 'All',
    inputText: '',
    newTask: '',

    tasks: [
      {
        taskId: 0,
        taskText: 'Task 1',
        taskDone: false,
        taskIsNew: false
      },
      {
        taskId: 1,
        taskText: 'Task 2',
        taskDone: true,
        taskIsNew: false
      },
      {
        taskId: 2,
        taskText: 'Task 3',
        taskDone: false,
        taskIsNew: false
      },
      {
        taskId: 3,
        taskText: 'Task 4',
        taskDone: true,
        taskIsNew: false
      },
      {
        taskId: 4,
        taskText: 'Task 5',
        taskDone: false,
        taskIsNew: false
      }
    ]
  };

export default function todoList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            state.tasks.forEach(task => {
                task.taskIsNew = false;
            });

            return {
                ...state,
                tasks: [...state.tasks, 
                    {
                      taskId: state.tasks.length, 
                      taskText: state.inputText,
                      taskDone: false,
                      taskIsNew: true
                    }]
            };

        case 'APPLY_FILTER':
            return {
                ...state,
                currentFilter: action.filter
            };

        case 'TOGGLE_TASK_STATUS':
            state.tasks[action.taskId].taskDone = !state.tasks[action.taskId].taskDone;
            return state;

        case 'INPUT_TEXT_CHANGE':
            return {
                ...state,
                inputText: action.text
            };

        default:
            return state;
    }
}