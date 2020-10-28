/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */

import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const App = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'inixindo',
        body: 'reactnative',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/100')
          .then(function (response) {
            // handle success
            alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/200')
          .then(function (response) {
            // handle success
            alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert('Both requests are now complete');
        }),
      );
  };

  return (
    <View style={styles.MainContainer}>
      <Text style={{fontSize: 28, textAlign: 'center'}}>
        React Native Request HTTP using Axios
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.button}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginTop: 18}}>
        www.inixindo.co.id
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#abc333',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;
