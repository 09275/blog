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

    //actions === { addBlogPost: (dispatch) => {return () => {} }}
    const boundActions = {};
    for (let key in actions) {
      // key === 'addBlogPost'
      // boundActions.addBlogPost = (dispatch) => {return () => {}}
      boundActions[key] = actions[key](dispatch);
    };

    // Inside value I could use {data: state} or 
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