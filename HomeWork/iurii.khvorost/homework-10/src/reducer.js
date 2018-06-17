
const initTasks = [
    {text: "First task", completed: false},
    {text: "Second task", completed: false},
    {text: "Third task", completed: false}
];

export default function reducer(state = {tasks: initTasks}, action) {
    switch (action.type) {
        case 'ADD':
            state.tasks.push({text: action.text, completed: false});
            return state;

        case 'COMPLETE':
            action.task.completed = action.completed;
            return state;

        default:
            return state;
    }
}