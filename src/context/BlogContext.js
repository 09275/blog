import React, { useState } from 'react';

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
  const [blogPosts, setBlogPosts] = useState([]);

  // If I will use the 'setBlogPosts' it is going to replace
  // completely the 'blogPosts'. But I want to add to the 
  // 'blogPosts' not replace it.
  const addBlogPost = () => {
    setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}])
  };

  // I can make a couple more helper functions and call them 
  // from their corresponding screens EditScreen & DeleteScreen. 
  // For example:
  // const editBlogPost = () => {}
  // const deleteBlogPost = () => {} 

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;