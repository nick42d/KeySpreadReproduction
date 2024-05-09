import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';

const Tab = createMaterialBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Blank} />
          <Tab.Screen name="Settings" component={Blank} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
function Blank() {
  return <View></View>;
}

export default App;
