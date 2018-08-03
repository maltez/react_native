import store from "./store";
import id from "shortid";

export const changeFilter = filter => {
    store.dispatch({
        type: "FILTER_TODO",
        filter
    });
};

export const done = id => {
    store.dispatch({
        type: "DONE_TODO",
        id
    });
};

export const remove = id => {
    store.dispatch({
        type: "REMOVE_TODO",
        id
    });
};

export const addNewToDo = value => {
    store.dispatch({
        type: "ADD_TODO",
        payload: {
            id: id.generate(),
            done: false,
            value
        }
    });
};