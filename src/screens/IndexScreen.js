import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {
  // Make use of 'BlogContext' and 'useContext'
  // in order to receive the value from the 'BlogContext'
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()}/>
      <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>; 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;