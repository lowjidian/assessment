import axios from 'axios';

const url = 'https://api.github.com/users/react-native-community/repos';
// Removed token to prevent unauthorized access
const token = 'TOKEN HERE';

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
