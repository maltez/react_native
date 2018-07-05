export const Filters = {
    all: 'ALL',
    complete: 'COMPLETE',
    pending: 'PENDING',
}

export const Actions = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SET_FILTER: 'SET_FILTER', 
    SET_INPUT: 'SET_INPUT',
}

export function addTodo(text) {
    return {
        type: Actions.ADD_TODO,
        text,
    }
}

export function toggleTodo(item) {
    return {
        type: Actions.TOGGLE_TODO,
        item
    }
}

export function setFilter(filter) {
    return {
        type: Actions.SET_FILTER,
        filter
    }
}

export function setInputText(inputText) {
    return {
        type: Actions.SET_INPUT,
        inputText: inputText
    }
}