import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ReservationCard} from '../components';
import Colors from '../config/Colors';

const Reservations = () => {
  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    const url = 'https://booking7-app.herokuapp.com/api/slots/';
    await fetch(url)
      .then(response => response.json())
      .then(response => {
        var booked = response.slots.filter(item => item.booked);
        console.log(booked);
        setSlots(booked);
        setLoading(false);
      });
  };

  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTomorrowDate = () => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  };

  const newdate = getTomorrowDate();

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.mainColor} />
      ) : (
        <FlatList
          style={styles.list}
          data={slots}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ReservationCard
              text={item.slot}
              key={item.id}
              seller={item.name}
              date={newdate}
            />
          )}
        />
      )}
    </View>
  );
};

export default Reservations;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
});
