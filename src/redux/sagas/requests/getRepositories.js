import axios from 'axios';

const url = 'https://api.github.com/users/react-native-community/repos';
const token = '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';

const requestGetRepositories = () => {
  return axios
    .get(url, {
      headers: {
        Authorization: 'token ' + token,
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export default requestGetRepositories;
