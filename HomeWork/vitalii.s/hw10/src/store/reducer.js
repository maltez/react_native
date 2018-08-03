const initialState = {
    items: [],
    filter: "All"
};

export default function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "REMOVE_TODO":
            return { ...state, items: state.items.filter(item => item.id !== action.id) };
        case "DONE_TODO":
            const updatedItems = state.items.map(item => {
                if (item.id === action.id) {
                    return { ...item, ...(item.done ? { done: false } : { done: true }) };
                }
                return item;
            });
            return {
                ...state,
                items: updatedItems
            };
        case "FILTER_TODO":
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}
