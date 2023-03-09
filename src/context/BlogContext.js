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

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

// Destructuring 'Context' and 'Provider'
export const { Context, Provider } = createDataContext(
  blogReducer,
  {addBlogPost},
  [] 
);