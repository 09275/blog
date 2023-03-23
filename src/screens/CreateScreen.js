import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';


const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);

  // Even though I am making use of Context and I am trying
  // to centralize all of my state to one location, I can 
  // still have local state inside a single component to 
  // control the text that's been entered inside there.
  // REMINDER: Adding some state to a text input is refered
  //           to as turning that thing into a 'controlled input'.
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput 
        style={styles.input} 
        value={title} 
        onChangeText={(text) => setTitle(text)} 
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput 
        style={styles.input} 
        value={content} 
        onChangeText={(text) => setContent(text)} 
      />
      <Button 
        title="Add Blog Post" 
        onPress={() => {
          addBlogPost(title, content);
          // This is a valid way but not very efficient.
          // For example lets say that instead of just updating
          // the state I want to make a network request to some API.
          // Then maybe I want to wait to get a response that my
          // blogpost has been successfuly created on that ouside API
          // before I navigate the user to the 'Index' page.
          // So if I decide to add some functionality to save this 
          // blogpost to an API, I would not want to immediately call 
          // 'navigate' after calling 'addBlogPost' because it would
          // propably take some time before I get a response from the 
          // API.
          navigation.navigate('Index');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding:5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft:5
  }
});

export default CreateScreen;