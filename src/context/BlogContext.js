import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delete_blogpost': {
      return state.filter((blogPost) => blogPost.id !== action.payload);
    }
    case 'add_blogpost': {
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`
        }
      ];
    }
    default: {
      return state;
    }
  }
};

// I need to pass 'dispatch' as an argument, so the 'addBlogPost'
// can use it when it is passed to 'createDataContext'
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

// Destructuring 'Context' and 'Provider'
// Also notice that I pass 'addBlogPost' inside an object
export const { Context, Provider } = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [] 
);