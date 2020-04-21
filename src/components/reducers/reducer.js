export const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true
};
  

const reducer = (state, action) => {
    switch (action.type) {

        case 'GET_POST':
            return {
                ...state,
                blogPosts: [...state.blogPosts, ...action.payload]
            }
        default:
            return state
    }
}

export default reducer
