
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make assync call to the databse STORE IT TO DATABASE
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Nandy',
            authorLastName: 'Mandy',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PORJECT', project });
        }).catch(err => {
            dispatch({ type: 'CREATE_PORJECT_ERROR', err });
        });
    }
};
