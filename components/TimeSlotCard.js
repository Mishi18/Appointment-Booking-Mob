import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TimeSlotCard = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="book-clock" size={24} color="white" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <Icon name="chevron-right" size={28} color="white" />
    </TouchableOpacity>
  );
};

export default TimeSlotCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
});
