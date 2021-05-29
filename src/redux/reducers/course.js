export const courseReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_COURSE":
            return { ...action.payload };
        default:
            return state;
    }
};
