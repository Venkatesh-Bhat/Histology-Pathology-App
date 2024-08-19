import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Icon, Text} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const RightContent = props => <Icon {...props} source="account" />;

const organData = [
  {
    title: 'respiratory system',
    url: 'https://sketchfab.com/models/34ef811ecdd14eb99433daf26fcb8061/embed',
  },
  {
    title: 'digestive and excretory system',
    url: 'https://sketchfab.com/models/3f598117d05044b88e95be6c5a3c59b9/embed',
  },
  {
    title: 'circulatory system',
    url: 'https://sketchfab.com/models/bf22cf96b1d44e2fb3375131491a505a/embed',
  },
  {
    title: 'urinary system',
    url: 'https://sketchfab.com/models/2a185530531344c59758afa390eeea37/embed',
  },
  {
    title: 'integumentary system',
    url: 'https://sketchfab.com/models/2c902649de1843e9b2e004a99a9ab923/embed',
  },
  {
    title: 'skeletal system',
    url: 'https://sketchfab.com/models/60ff9fe1a46d4456ad99ccd158210685/embed',
  },
  {
    title: 'muscular system',
    url: 'https://sketchfab.com/models/7ea21567ff9942bf9511e2d99efe85d9/embed',
  },
  {
    title: 'endocrine system',
    url: 'https://sketchfab.com/models/b10f70cacb6946da851e5696291398a5/embed',
  },
  {
    title: 'lymphatic system',
    url: 'https://sketchfab.com/models/8e78b1c6b2214e1c96c845df69c3e19e/embed',
  },
  {
    title: 'nervous system',
    url: 'https://sketchfab.com/models/c6bde6cd35764f108dde933ad2c34142/embed',
  },
  {
    title: 'reproductive system',
    url: 'https://sketchfab.com/models/d3494a1490de40f9ab3108585b1b379c/embed',
  },
];

const Item = ({organ, navigation}) => {
  return (
    <Card
      style={styles.card}
      onPress={() => {
        console.log(organ.url);
        navigation.navigate('OrganDetails', {organUrl: organ.url});
      }}>
      <Card.Title title={organ.title} />
    </Card>
  );
};

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Card style={[styles.card, {marginTop: 0}]}>
        <Card.Title
          title="Fatel Bhai"
          subtitle="fatel@gmail.com"
          left={LeftContent}
          right={RightContent}
          //   rightStyle={{marginEnd: 10}}
        />

        {/* <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions> */}
      </Card>
      <Text variant="headlineMedium" style={styles.header}>
        Organs
      </Text>
      <FlatList
        data={organData}
        renderItem={({item}) => <Item organ={item} navigation={navigation} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 7,
    marginBottom: 10,
  },
  card: {
    paddingRight: 10,
    marginTop: 10,
  },
  header: {
    paddingVertical: 3,
  },
});
