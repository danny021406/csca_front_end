const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                cosCame: action.cosCame,
                completed: false,
                grade: action.grade,
                semester:action.semester,
                suggest:action.suggest,
                pre:action.pre,
                suggest_flag:false,
                pre_flag:false,
                active:false
            };
        case 'SET_ALL':
            if(action.index===0){
                return Object.assign({}, state, {
                    completed: false
                });
            }
            if(action.index===1){
                return Object.assign({}, state, {
                    completed: true
                });
            }
            if(action.index===2){
                return Object.assign({}, state, {
                    active: false
                });
            }

        case 'SET_PASCOS':
            if (state.cosCame === action.cosCame || state.cosCame + '(英文授課)' === action.cosCame) {
                return Object.assign({}, state, {
                    completed: true
                });
            }

            return state;

        case 'SET_NOPASCOS':
            if (state.cosCame === action.cosCame || state.cosCame + '(英文授課)' === action.cosCame) {
                return Object.assign({}, state, {
                    completed: false
                });
            }

            return state;

        case 'HANDLE_DATA':
            if (state.cosCame !== action.pre) {
                return Object.assign({}, state, {
                    pre_flag: false
                });
            }

            return Object.assign({}, state, {
                pre_flag: !state.pre_flag
            });

        case 'SET_THIS_BUTTON':
            if (state.cosCame === action.cosCame) {
                // if(state.active === false)
                return Object.assign({}, state, {
                    active: true
                });
                // else {
                //     return Object.assign({}, state, {
                //         active: false
                //     });
                // }
            }

            return Object.assign({}, state, {
                active: true
            });

        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'SET_PASCOS':
            return state.map(t =>
                todo(t, action)
            );
        case 'SET_ALL':
            return state.map(t =>
                todo(t, action)
            );
        case 'SET_NOPASCOS':
            return state.map(t =>
                todo(t, action)
            );
        case 'HANDLE_DATA':
            return state.map(t =>
                todo(t, action)
            );

        default:
            return state
    }
};

export default todos