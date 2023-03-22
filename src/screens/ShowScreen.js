import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';


const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const id = navigation.getParam('id');
  // 'find' is a build in function inside which I can pass another 
  // function which is going to be called for each (blogPost)
  // inside that array of blog posts. When the function will 
  // evaluate to true I will assign that blog post to blogPost.
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;