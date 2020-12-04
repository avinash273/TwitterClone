import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from "../components/Feed";
import tweets from '../data/tweets';
import NewTweetButton from "../components/NewTweetButton";

export default function NewTweetScreen() {
  return (
    <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
