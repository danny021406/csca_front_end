let nextTodoId = 0;
export const addTodo = (cosCame,grade,semester,suggest,pre) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        cosCame,grade,semester,suggest,pre,
        suggest_flag:0,
        pre_flag:0
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const setThisbutton = (cosCame) => {
    return {
        type: 'SET_THIS_BUTTON',
        cosCame
    }
};

export const setAll = (cosCame,index) => {
    return {
        type: 'SET_ALL',
        cosCame,
        index
    }
};

export const setPascos = (cosCame) => {
    return {
        type: 'SET_PASCOS',
        cosCame
    }
};

export const setNopascos = (cosCame) => {
    return {
        type: 'SET_NOPASCOS',
        cosCame
    }
};

export const handleCoursedata = (pre) => {
    return {
        type: 'HANDLE_DATA',
        pre
    }
};