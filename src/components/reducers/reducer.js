export const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true
};
  

const reducer = (state, action) => {
    switch (action.type) {

        case 'SET_POST':
            return {
                ...state,
                blogPosts: [...state.blogPosts, ...action.payload]
            }
        case 'SENDING_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'REQUEST_FINISHED':
            return {
                ...state,
                loading: false
            }
        case 'SET_SINGLE_POST':
            return {
                ...state,
                currentBlogPost: action.payload
            }
        default:
            return state
    }
}

export default reducer
