import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Welcome, SellerCard} from '../components';
import Colors from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  const viewSellers = () => {
    navigation.navigate('Sellers');
  };

  const viewReservations = () => {
    navigation.navigate('Reservations');
  };

  return (
    <View style={styles.container}>
      <Welcome />
      <MainCard title={'View Sellers'} onPress={viewSellers} icon={'people'} />
      <MainCard
        title={'My Reservations'}
        onPress={viewReservations}
        icon={'book'}
      />
      <MainCard title={'View Other'} icon={'article'} />
      <MainCard title={'View Other'} icon={'article'} />
    </View>
  );
};

export default Home;

const MainCard = ({title, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Icon name={icon} size={30} color="white" />
      <Text style={styles.name}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    width: '90%',
    height: 110,
    flexDirection: 'row',
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    // justifyContent: '',
    marginTop: 15,
  },
  name: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
  },
});
