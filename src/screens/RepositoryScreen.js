import React from 'react';
import {StatusBar, Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from '../../lib/tailwind';
import {
  Code,
  Eye,
  GitFork,
  GitPullRequest,
  Star,
  WarningCircle,
} from 'phosphor-react-native';

import {useSelector} from 'react-redux';

import InfoListItem from '../components/InfoListItem';

const RepositoryScreen = ({route}) => {
  const repositories = useSelector(state => state.repositories.repositories);
  const {repositoryId} = route.params;
  const repository = repositories.find(repo => repo.id === repositoryId);

  const {
    name,
    description,
    stargazers_count,
    forks_count,
    open_issues_count,
    size,
    language,
    watchers_count,
  } = repository;

  return (
    <SafeAreaView
      style={tw`flex-1 pb-4 bg-black`}
      edges={['bottom', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView>
        <View style={tw`px-4`}>
          <Text
            style={tw`mt-6 text-2xl tracking-tight text-lime-400 font-interBold`}
            numberOfLines={1}>
            {name}
          </Text>
          <Text style={tw`mt-6 text-base text-zinc-300 font-interRegular`}>
            {description}
          </Text>
          <View style={tw`flex-row -ml-0.5 mt-6`}>
            <View style={tw`flex-row items-center `}>
              <Star color="#71717a" weight="duotone" size={22} />
              <Text style={tw`ml-1.5 text-base text-white font-interRegular`}>
                {stargazers_count} stars
              </Text>
            </View>
            <View style={tw`flex-row items-center ml-4`}>
              <GitFork color="#71717a" weight="duotone" size={22} />
              <Text style={tw`ml-1.5 text-base text-white font-interRegular`}>
                {forks_count} forks
              </Text>
            </View>
          </View>
        </View>
        <View style={tw`mt-8 border-b border-zinc-800`}>
          <InfoListItem
            name="Open Issues"
            value={open_issues_count}
            icon={<WarningCircle color="#a3e635" weight="duotone" size={22} />}
          />
          <InfoListItem
            name="Repo Size"
            value={size + ` KB`}
            icon={<GitPullRequest color="#a3e635" weight="duotone" size={22} />}
          />
          <InfoListItem
            name="Watchers"
            value={watchers_count}
            icon={<Eye color="#a3e635" weight="duotone" size={22} />}
          />
          <InfoListItem
            name="Language"
            value={language !== null ? language : 'None'}
            icon={<Code color="#a3e635" weight="duotone" size={22} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RepositoryScreen;
