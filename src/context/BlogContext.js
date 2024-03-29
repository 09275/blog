import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost': {
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    }
    case 'delete_blogpost': {
      return state.filter((blogPost) => blogPost.id !== action.payload);
    }
    case 'add_blogpost': {
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
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
  return (title, content, callback) => {
    dispatch({type: 'add_blogpost', payload: {title: title, content:content}});
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blogpost',
      payload: {id, title, content}
    });
    if (callback) {
      callback();
    }
  };
};

// Destructuring 'Context' and 'Provider'
// Also notice that I pass 'addBlogPost' and 'deleteBlogPost' 
// inside an object
export const { Context, Provider } = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [] 
);