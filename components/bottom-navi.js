import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

//Surpressing react-native-paper BottomComponent warning
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Warning: A props object containing a "key" prop is being spread into JSX:', // or the specific warning text
]);

import HomePage from './HomePage';
import OrganDetails from './OrganDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HistologyRoute = () => <Text>Histology Images</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Tab = createBottomTabNavigator();

const BottomComponent = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home-circle',
      unfocusedIcon: 'home-circle-outline',
    },
    // {
    //   key: 'organs',
    //   title: 'Organs',
    //   focusedIcon: 'head-heart',
    //   unfocusedIcon: 'head-heart-outline',
    // },
    {
      key: 'histology',
      title: 'Histology',
      focusedIcon: 'graph',
      unfocusedIcon: 'graph-outline',
    },
    {key: 'recents', title: 'Recents', focusedIcon: 'history'},
  ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   home: HomePage,
  //   histology: HistologyRoute,
  //   organs: OrganDetails,
  //   recents: RecentsRoute,
  // });

  // const renderScene = ({route}) => {
  //   switch (route.key) {
  //     case 'home':
  //       return <HomePage navigation={navigation} />;
  //     // case 'organs':
  //     //   return <OrganDetails navigation={navigation} />;
  //     case 'histology':
  //       return <HistologyRoute />;
  //     case 'recents':
  //       return <RecentsRoute />;
  //     default:
  //       return null;
  //   }
  // };

  const sceneMap = {
    home: props => <HomePage {...props} />,
    histology: props => <HistologyRoute {...props} />,
    recents: props => <RecentsRoute {...props} />,
    // organs: (props) => <OrganDetails {...props} />,
  };

  const renderScene = ({route}) => {
    const SceneComponent = sceneMap[route.key];
    return SceneComponent ? SceneComponent({navigation}) : null;
  };

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );

  // return (
  //   <Tab.Navigator>
  //     <Tab.Screen
  //       name="Home"
  //       component={HomePage}
  //       options={{headerShown: false}}
  //     />
  //     <Tab.Screen
  //       name="Histology"
  //       component={HistologyRoute}
  //       options={{title: 'Histology'}}
  //     />
  //     <Tab.Screen
  //       name="Recents"
  //       component={RecentsRoute}
  //       options={{title: 'Recents'}}
  //     />
  //   </Tab.Navigator>
  // );
};

export default BottomComponent;
