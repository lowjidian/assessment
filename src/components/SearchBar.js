import React from 'react';
import {TextInput, View} from 'react-native';
import tw from '../../lib/tailwind';
import {MagnifyingGlass} from 'phosphor-react-native';

import {useDispatch} from 'react-redux';
import {searchParamsChange} from '../redux/actions/index';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <View style={tw`absolute z-10 pt-2.5 ml-px pl-2.5`}>
        <MagnifyingGlass color="#71717a" weight="duotone" size={20} />
      </View>
      <TextInput
        style={tw`h-10 pl-10 pr-4 text-white border rounded font-interRegular border-zinc-800/80 bg-zinc-900/70 bg-zinc-900`}
        placeholder="Search repository"
        placeholderTextColor="#71717a"
        keyboardAppearance="dark"
        onChangeText={value => {
          dispatch(searchParamsChange(value));
        }}
      />
    </View>
  );
};

export default SearchBar;
