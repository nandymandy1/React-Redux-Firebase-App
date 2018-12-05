const initState = {
    projects: [
        { id: 1, title: 'Project 1', content: 'blah blah blah' },
        { id: 2, title: 'Project 2', content: 'blah blah blah' },
        { id: 3, title: 'Project 3', content: 'blah blah blah' },
        { id: 4, title: 'Project 4', content: 'blah blah blah' }
    ]
};


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PORJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;