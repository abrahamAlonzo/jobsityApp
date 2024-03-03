import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {Input, Button} from '../../components';
import {styles} from './HomeScreen.styles';

import {getShows} from '../../api';

const HomeScreen = () => {
  const [searchMovie, setSearchMovie] = useState('');

  useEffect(() => {
    getShowsScroll = async page => {
      const {data} = await getShows(page);
      console.log(data);
    };

    getShowsScroll(1);
  }, []);

  return (
    <View>
      <View style={styles.searchContainer}>
        <Input
          title={'Search Movie'}
          value={searchMovie}
          onChangeText={setSearchMovie}
        />
      </View>
      <Button text="Search" />
    </View>
  );
};

export default HomeScreen;
