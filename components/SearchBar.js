import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/Colors';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const searchSubmit = () => {
    console.log(search);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} />
      <TextInput
        value={search}
        style={styles.input}
        onChangeText={t => setSearch(t)}
        placeholder="Search"
        onSubmitEditing={searchSubmit}
        clearButtonMode="always"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
    borderRadius: 15,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  input: {
    width: '90%',
    paddingHorizontal: 5,
    fontSize: 18,
  },
});
