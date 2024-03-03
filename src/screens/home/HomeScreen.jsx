import React from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from '../../components';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Input />
      <Button text="Press me" />
    </View>
  );
};

export default HomeScreen;
