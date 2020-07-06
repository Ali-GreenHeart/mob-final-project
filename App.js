import React, {useState} from 'react';
import {AppLoading} from "expo";
import { Provider }  from  "react-redux"

import {loadFonts} from "./styles/fonts";
import {
  GameScreen,
  PasswordGameScreen,
  ColorGameScreen,
  MemoryGridGameScreen,
  TrafficLightGameScreen,
  HomeScreen,
} from "./screens";
import {TicTacGameScreen} from "./screens/TicTacGameScreen/TicTacGameScreen";
import {LoginPage} from "./screens/Auth/LoginPage";
import  store from "./store"
import View from "react-native-web/src/exports/View";
import Text from "react-native-web/dist/exports/Text";

export default function App() {

  const [loaded,setLoaded] = useState(false);
  if(!loaded){
    return <AppLoading
        startAsync={loadFonts}
        onFinish={()=> setLoaded(true)}
        onError={()=>console.log("rejected")}
    />
  }


  return  <Provider store={store}>
              <HomeScreen/>
         </Provider>







}
