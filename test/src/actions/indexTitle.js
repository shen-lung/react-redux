export const CHANGE_TITLE = 'CHANGE_TITLE';

export const changeTitle = (titleName) => (
    (dispatch) => {
        dispatch({type: CHANGE_TITLE, payload: titleName});
    }
);
