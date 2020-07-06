import React, {useState} from 'react';
import {AppLoading} from "expo";

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
import {Profile} from "./screens/Profile/Profile";

export default function App() {

  const [loaded,setLoaded] = useState(false);
  if(!loaded){
    return <AppLoading
        startAsync={loadFonts}
        onFinish={()=> setLoaded(true)}
        onError={()=>console.log("rejected")}
    />
  }


  return <Profile/>;

}
