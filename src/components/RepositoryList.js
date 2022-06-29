import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import tw from '../../lib/tailwind';

import {getRepositories} from '../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';

import SearchBar from './SearchBar';
import RepositoryCard from './RepositoryListItem';

import * as color from '../assets/json/github-colors.json';

const RepositoryList = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(state => state.repositories.repositories);
  const searchParams = useSelector(state => state.repositories.searchParams);
  const isLoading = useSelector(state => state.repositories.isLoading);
  const error = useSelector(state => state.repositories.error);
  const filteredRepositories = repositories.filter(repository => {
    return repository.name
      .toLowerCase()
      .includes(searchParams.replace(/\s+/g, '-').toLowerCase());
  });

  console.log(repositories);
  console.log(error);

  useEffect(() => {
    dispatch(getRepositories());
  }, []);

  const refreshRepositories = () => {
    dispatch(getRepositories());
  };

  const repository = ({item}) => (
    <RepositoryCard
      id={item.id}
      name={item.name}
      description={item.description}
      stargazersCount={item.stargazers_count}
      language={item.language}
      color={color}
    />
  );

  return (
    <SafeAreaView style={tw`flex-1`}>
      {isLoading ? (
        <View style={tw`mt-8`}>
          <ActivityIndicator />
        </View>
      ) : null}
      {!isLoading && (
        <FlatList
          data={filteredRepositories}
          renderItem={repository}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refreshRepositories}
              colors={['#a3e635']}
              progressBackgroundColor={'#000'}
            />
          }
          ListHeaderComponent={
            <View style={tw`px-4 mb-2 ios:mt-2`}>
              <SearchBar />
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default RepositoryList;
