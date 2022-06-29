import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../lib/tailwind';

const InfoListItem = ({name, value, icon}) => {
  return (
    <View
      style={tw`flex-row items-center justify-between h-12 px-4 border-t border-zinc-700/80 bg-zinc-900/70`}>
      <View style={tw`flex-row items-center flex-1`}>
        <View style={tw.style('items-center justify-center w-8 h-8')}>
          {icon}
        </View>
        <Text style={tw`ml-4 text-base text-white font-interRegular`}>
          {name}
        </Text>
      </View>
      <View>
        <Text
          style={tw`pr-2 text-base text-right text-zinc-400 font-interRegular`}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default InfoListItem;
