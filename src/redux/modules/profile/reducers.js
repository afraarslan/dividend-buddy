import * as $PA from './actions';

const initialState = {
    user: {
        name: "Afra",
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case $PA.LOAD_USERS_LOADING: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}