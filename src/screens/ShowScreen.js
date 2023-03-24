import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';


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
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <EvilIcons name="pencil" size={35}/>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;