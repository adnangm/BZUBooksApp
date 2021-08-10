import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar
            placeholder="type to search books"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon= ""
          />
        </View>
        <Text>Search for the books and download it or make it favorate by adding to wishlist</Text>
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});
