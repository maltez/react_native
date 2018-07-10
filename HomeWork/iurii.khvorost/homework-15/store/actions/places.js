import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE, CHECK_PLACE, DELETE_SELECTED } from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        placeKey: key
    };
};

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    };
};

export const checkPlace = (key) => {
    return {
        type: CHECK_PLACE,
        placeKey: key
    };
};

export const deleteSelected = () => {
    return {
        type: DELETE_SELECTED
    };
};