import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title="Save Blog Post"
        onPress={() => onSubmit(title,content)} 
      />
    </View>
  );
};

/* When I use the 'BlogPostForm' component from the 'EditScreen' I need
   to pass it the 'initialValues' prop which contains an object with 
   the title and the content of the blogpost I want to change. 
   But this is not the case when I use the 'BlogPostForm' from the 
   'CreateScreen'. In this case I do not want to pass some initial value.
   The problem is that if I do not pass something, 
   the value in the place of 'initialValues' will be 'undefined', 
   which will cause an error. 
   In order to avoid this I can use the 'BlogPostForm.defaultProps' and 
   give the default values I want the 'initialValues' prop to have,
   in case I will not pass something to it.
*/
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
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

export default BlogPostForm;