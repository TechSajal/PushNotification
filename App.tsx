import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    getToken();
  }, []);

  useEffect(()=>{
    const uns = messaging().onMessage(async remoteMessage =>{
     Alert.alert('A new FCM message arrived in Foreground mode',JSON.stringify(remoteMessage))
    })
     return  uns
  },[])

  const getToken = async () => {
    let token = await messaging().getToken();
    setToken(token);
    console.log(token);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>App</Text>
      <Text style={{margin:16,fontSize:16,fontWeight:'600',color:"black"}}>{token}</Text>
    </View>
  );
};

export default App;
