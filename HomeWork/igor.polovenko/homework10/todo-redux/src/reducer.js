import { Actions, Filters } from './actions';
import { Item } from './components/ToDoList'

const initialState = {
    list: [],
    filter: Filters.all,
    inputText: '',
}

export default function todoAppReducer(state = initialState, action) {
    return {
        list: processList(state.list, action),
        filter: processFilter(state.filter, action),
        inputText: processInput(state.inputText, action),
    }
}

function processList(list, action) {
    switch (action.type) {
        case Actions.ADD_TODO:
            let item = new Item(action.text);
            let newList = list.slice();
            newList.push(item);
            return newList.sort(Item.comparator());
        case Actions.TOGGLE_TODO:
            newList = list.map((item) => {
                if (item === action.item) {
                    return {
                        ...item,
                        checked: !item.checked
                    }
                }
                return item;
            });
            return newList.sort(Item.comparator());
        default:
            return list;
    }
}

function processFilter(filter, action) {
    switch (action.type) {
        case Actions.SET_FILTER:
            return action.filter;
        default:
            return filter;
    }
}

function processInput(inputText, action) {
    switch (action.type) {
        case Actions.SET_INPUT:
            return action.inputText;
        case Actions.ADD_TODO:
            return '';
        default:
            return inputText;
    }
}