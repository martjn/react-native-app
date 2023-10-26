/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './src/screens/auth/Splash/index.js';
import Signup from './src/screens/auth/Signup/index.js';
import SignIn from './src/screens/auth/SignIn/index.js';
import Home from './src/screens/app/Home/index.js';
import Favorites from './src/screens/app/Favorites/index.js';
import Profile from './src/screens/app/Profile/index.js';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/utils/colors.js';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductDetails from './src/screens/app/ProductDetails/index.js';
import Settings from './src/screens/app/Settings/index.js';
import Config from 'react-native-config';
import CreateListing from './src/screens/app/CreateListing/index.js';
import {categories} from './src/data/categories.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const GOOGLE_WEB_CLIENT_ID =
  '525091476988-3e4a4mliva8n42qvr14pi9ucod6n4djo.apps.googleusercontent.com';
const GOOGLE_IOS_CLIENT_ID =
  '525091476988-a9u0lucbv0k8bpbi91o04f253so8g4cu.apps.googleusercontent.com';
const GOOGLE_REVERSED_CLIENT_ID =
  'com.googleusercontent.apps.525091476988-a9u0lucbv0k8bpbi91o04f253so8g4cu';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const UserContext = React.createContext('');

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateListing"
        component={CreateListing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          } else if (route.name === 'ProfileTab') {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          }

          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGray},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const isSignedIn = false;
  const [user, setUser] = useState();

  useEffect(() => {
    async () => {
      const accessToken = await AsyncStorage.getItem('auth_token');
      setUser({accessToken});
    };
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
    });
  }, []);

  const theme = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={(user, setUser)}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {user?.accessToken ? (
              <>
                <Stack.Screen
                  name="Tabs"
                  component={Tabs}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="ProductDetails"
                  component={ProductDetails}
                  options={{headerShown: false}}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Splash"
                  component={Splash}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="SignIn"
                  component={SignIn}
                  options={{headerShown: false}}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </SafeAreaProvider>
  );
}

export default React.memo(App);
