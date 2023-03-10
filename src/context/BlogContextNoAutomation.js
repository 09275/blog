import React, { useReducer } from 'react';

/*
  Note: Props are used to pass data from a parent
  to its direct child. 
  Context is able to pass data from a parent to some
  deeply nested child.
*/

// You can think of BlogContext object as a pipe that
// moves information from the BlogProvider to 
// all the children (including the deeply nested ones).
const BlogContext = React.createContext();

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
// BlogProvider is the component that wraps everything
// inside it (including App.js). This way it can send
// information directly to any child component it needs.
/* 
  Inside the 'BlogContext' object there is the 'Provider',
  which is responsible for accepting some information 
  (as a prop) and pass it to all the components/children
  inside the context (in this case named BlogContext).
*/
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({type: 'add_blogpost'});
  };

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;