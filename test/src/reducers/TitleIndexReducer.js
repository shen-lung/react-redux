import {
    CHANGE_TITLE
} from '../actions/indexTitle';

const titleName = (state = 'Bien venidos!!!', {type, payload}) => {
    let newState = state;

    if (type === CHANGE_TITLE) {
        newState = payload;
    }

    return newState;
};

export default titleName;
