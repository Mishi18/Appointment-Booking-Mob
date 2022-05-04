import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TimeSlotCard} from '../components';
import Snackbar from 'react-native-snackbar';

const Seller = ({navigation, route}) => {
  const {id, name, description, address} = route.params;

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    const url = `https://booking7-app.herokuapp.com/api/slots/${id}/getSlots/list`;
    await fetch(url)
      .then(response => response.json())
      .then(response => setSlots(response.slots));
  };

  const [slots, setSlots] = useState([]);

  const updateSlot = slotid => {
    fetch('https://booking7-app.herokuapp.com/api/requests/', {
      method: 'POST',
      body: JSON.stringify({
        sellerId: id,
        userId: '5566666',
        slotID: slotid,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        showSnackBar(true);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showSnackBar = bool => {
    let text = 'Reservation Completed!';
    if (!bool) {
      text = 'Reservation Cancelled!';
    }
    Snackbar.show({
      text: text,
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const getTomorrowDate = () => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  };

  const reserveSlot = id => {
    console.log(id);
    Alert.alert(
      'Confirm Reservation',
      'Are you sure you want to reserve this slot?',
      [
        {
          text: 'No',
          onPress: () => showSnackBar(false),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => updateSlot(id)},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.desc}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{address}</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Available Time Slots</Text>
        <Text style={styles.description}>
          Select a time slot to reserve on {getTomorrowDate()}
        </Text>
      </View>
      <FlatList
        style={styles.list}
        data={slots}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          console.log(item);
          if (!item.booked) {
            return (
              <TimeSlotCard
                text={item.slot}
                key={item.id}
                onPress={() => reserveSlot(item.id)}
              />
            );
          }
        }}
      />
    </View>
  );
};

export default Seller;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  desc: {
    padding: 10,
    borderWidth: 1,
    width: '90%',
    borderRadius: 15,
  },
  description: {
    fontSize: 18,
    textAlign: 'justify',
  },
  heading: {
    width: '90%',
    marginVertical: 15,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
  },
  list: {
    width: '100%',
  },
});
