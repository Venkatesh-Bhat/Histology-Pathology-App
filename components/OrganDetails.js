import React from 'react';
import {Text} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

export default function OrganDetails({route}) {
  const {organUrl} = route.params;
  console.log(organUrl);

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: organUrl,
        }}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
