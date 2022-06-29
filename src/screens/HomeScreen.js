import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';

import RepositoryList from '../components/RepositoryList';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={tw`flex-1 pb-4 bg-black`}
      edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <RepositoryList />
    </SafeAreaView>
  );
};

export default HomeScreen;
