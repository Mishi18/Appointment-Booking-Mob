import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const SellerCard = ({id, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="contacts" size={24} color="white" />
      <Text style={styles.name}>{name}</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <MIcon name="keyboard-arrow-right" size={28} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default SellerCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 80,
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 10,
    alignSelf: 'center',
  },
  name: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
  },
});
