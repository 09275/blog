import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {
  // Make use of 'BlogContext' and 'useContext'
  // in order to receive the value from the 'BlogContext'
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;