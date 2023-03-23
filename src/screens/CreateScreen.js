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
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
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