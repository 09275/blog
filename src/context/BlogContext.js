import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost': {
      return [
        ...state, {title: `Blog Post #${state.length + 1}`}
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

// Destructuring 'Context' and 'Provider'
// Also notice that I pass 'addBlogPost' inside an object
export const { Context, Provider } = createDataContext(
  blogReducer,
  {addBlogPost},
  [] 
);