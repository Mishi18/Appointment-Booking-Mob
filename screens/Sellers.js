import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SellerCard, SearchBar} from '../components';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../config/Colors';

const Sellers = ({navigation}) => {
  useEffect(() => {
    loadSellers();
  }, []);

  const loadSellers = () => {
    const url =
      'https://booking7-app.herokuapp.com/api/sellers/getSellers/list';
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setSellers(response.sellers);
        setLoading(false);
        console.log(response.sellers);
      })
      .catch(err => console.log(err));
  };

  const [loading, setLoading] = useState(true);
  const [sellers, setSellers] = useState([]);

  return (
    <View style={{width: '100%', flex: 1}}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.mainColor} />
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <SearchBar />
          </View>
          <FlatList
            data={sellers}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <SellerCard
                id={item.id}
                name={item.title}
                onPress={() =>
                  navigation.navigate('Seller', {
                    id: item.id,
                    name: item.title,
                    description: item.description,
                    address: item.address,
                    slots: item.slots,
                  })
                }
              />
            )}
          />
        </>
      )}
    </View>
  );
};

export default Sellers;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
