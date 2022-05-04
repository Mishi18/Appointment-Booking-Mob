import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ReservationCard = ({text, seller, date}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="book-clock" size={24} color="white" />
        <View style={styles.details}>
          <Text style={styles.seller}>{seller}</Text>
          <Text style={styles.text}>{date + ' ' + text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReservationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 5,
  },
  details: {
    justifyContent: 'center',
  },
  seller: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 5,
  },
});
