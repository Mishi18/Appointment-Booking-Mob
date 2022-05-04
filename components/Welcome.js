import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>Back!</Text>
      </View>
      <Image
        source={require('../assets/images/account.png')}
        style={{width: 75, height: 75}}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    margin: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
  },
});
