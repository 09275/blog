import React, { useReducer } from 'react';

// A reusable funtion that I can use to automate the 
// process of creating new context for different 
// kinds of data.

/*
  A better name for 'actions' would be 'eventHandlers'
  since 'actions' will be an object which will include
  all the event handlers I want to make available to 
  my child components so that they can dispatch an 
  action and change the state.
*/
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === { addBlogPost: (dispatch) => {return () => {dispatch({type: 'add_blogpost'});}} }
    //console.log(actions);
    /*
      The idea is to loop through the 'actions' object. For each key 
      (for example "addBlogPost") I am going to call the 
      function with the 'dispatch' argument and that is going to return
      the anonymous function () => {dispatch({type: 'add_blogpost'})
    */
    const boundActions = {};
    for (let key in actions) {
      // key === 'addBlogPost' || 'deleteBlogPost'
      // boundActions.addBlogPost = () => {dispatch({type: 'add_blogpost'});
      // The 'actions[key](dispatch)' is like saying 'function addBlogPost(dispatch)'
      boundActions[key] = actions[key](dispatch);
      //console.log(boundActions);
    };

    // Inside the 'value' I could use {data: state} or 
    // just {state: state} which is the same as {state}
    // since the {key:value} pair is the same.
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };

};