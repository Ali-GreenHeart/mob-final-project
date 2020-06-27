import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from "expo";

import { CustomText, CustomBtn, RadioGroup } from './components';
import {loadFonts} from "./styles/fonts";
import {GameScreen, PasswordGameScreen} from "./screens"
import {HomeScreen} from "./screens/HomeScreen/HomeScreen";


export default function App() {
  
  const [loaded,setLoaded] = useState(false);
  if(!loaded){
    return <AppLoading
            startAsync={loadFonts}
            onFinish={()=> setLoaded(true)}
            onError={()=>console.log("rejected")}
    />
  }

  return <HomeScreen />;
}


