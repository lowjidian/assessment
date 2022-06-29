import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Code, Star} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import tw from '../../lib/tailwind';

const RepositoryCard = ({
  id,
  name,
  description,
  stargazersCount,
  language,
  color,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('Repository', {
          repositoryId: id,
        })
      }>
      <View style={tw`px-4.5 py-4 border-b border-zinc-700/80 `}>
        <Text style={tw`text-base text-white font-interBold`} numberOfLines={1}>
          {name}
        </Text>
        <Text
          style={tw`mt-2 text-base text-zinc-300 font-interRegular`}
          numberOfLines={2}>
          {description}
        </Text>
        <View style={tw`flex-row mt-4`}>
          <View style={tw`flex-row items-center`}>
            <Star color="#a3e635" weight="duotone" size={20} />
            <Text style={tw`ml-1.5 text-sm text-zinc-400 font-interRegular`}>
              {stargazersCount}
            </Text>
          </View>
          {language !== null && (
            <View style={tw`flex-row items-center ml-4`}>
              <Code
                // color={color.default[language].color}
                color="#a3e635"
                weight="duotone"
                size={20}
              />
              <Text style={tw`ml-1.5 text-sm text-zinc-400 font-interRegular`}>
                {language}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryCard;
