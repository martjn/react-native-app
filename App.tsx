/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
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
import Splash from "./src/screens/auth/Splash/index.js"
import Signup from './src/screens/auth/Signup/index.js';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



import Config from 'react-native-config';

const GOOGLE_WEB_CLIENT_ID="525091476988-3e4a4mliva8n42qvr14pi9ucod6n4djo.apps.googleusercontent.com"
const GOOGLE_IOS_CLIENT_ID="525091476988-a9u0lucbv0k8bpbi91o04f253so8g4cu.apps.googleusercontent.com"
const GOOGLE_REVERSED_CLIENT_ID="com.googleusercontent.apps.525091476988-a9u0lucbv0k8bpbi91o04f253so8g4cu"

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
    })
  }, [])


  return (
    <SafeAreaView>
      <Signup/>

    </SafeAreaView>
  );
}

export default App;
