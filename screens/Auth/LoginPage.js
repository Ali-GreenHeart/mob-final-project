import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {CustomBtn, CustomText} from "../../components";
import fbApp from "../../store/firebase";
import {signIn} from "../../store/userCredentials";
import store from "../../store";
export const LoginPage = () => {
    const [isLogIn, setIsLogIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const Navigate = () => {
      //Please write navigation code here
    };
    let user=fbApp.auth.currentUser;
    const register = () =>{
        !isLogIn && userData.name.trim() === "" ? setErrorMsg("Name field is required"):
            (isLogIn ? fbApp.auth.signInWithEmailAndPassword(userData.email, userData.password).then(res => {
                store.dispatch(signIn({fullName: fbApp.auth.currentUser.displayName, mail: userData.email, password: userData.password, img: user.photoURL}));
                Navigate();
            }).catch(err => setErrorMsg(err.message)):
        fbApp.auth.createUserWithEmailAndPassword(userData.email, userData.password).then(res =>
        {
            user.updateProfile({displayName: userData.name});
            store.dispatch(signIn({fullName: userData.name, mail: userData.email, password: userData.password, img: null}));
            Navigate();
        }).catch(err => setErrorMsg(err.message)));
    };
    return (
        <View style={styles.container}>
            <View>
                <CustomText style={styles.pageTitle}>{isLogIn ? "Sign In" : "Sign Up"}</CustomText>
                <View>
                    {!isLogIn && <TextInput placeholder={"name"} style={styles.input} onChangeText={value => setUserData({...userData, name: value}) }/>}
                    <TextInput placeholder={"email"} style={styles.input} onChangeText={value => setUserData({...userData, email: value})} required={true} />
                    <TextInput placeholder={"password"} secureTextEntry={true} style={styles.input} onChangeText={value => setUserData({...userData, password: value})} required={true} minLengh={6}/>
                </View>
                {errorMsg ? <CustomText style={styles.error}>{errorMsg}</CustomText> : null}
                <CustomText style={styles.question}>{isLogIn ? "Don't you have account yet?" : "Do you have account?"}</CustomText>
                <TouchableOpacity onPress={() => setIsLogIn(!isLogIn)}>
                    <CustomText style={styles.authLink}>{isLogIn ? "Sign Up" : "Sign In"}</CustomText>
                </TouchableOpacity>
                <CustomBtn title={isLogIn ? "Sign In" : "Sign Up"} style={styles.button} onPress={register}/>
                {/*<CustomBtn title={isLogIn ? "Sign in with Google account" : "Sign up with Google account"}style={styles.button}/>*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
    },
    pageTitle:{
        fontSize: 50,
        textAlign: "center",
    },
    input: {
        borderRadius: 6,
        borderColor: 'rgba(50,50,50,0.5)',
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    question:{
        textAlign: "center",
        fontSize: 16,
        marginVertical: 10,
    },
    authLink: {
        textAlign: "center",
        fontSize: 20,
        textDecorationLine: "underline",
        color: '#166FCD',
        marginVertical: 10,
    },
    button: {
        marginVertical: 10,
    },
    error: {
        fontSize: 20,
        backgroundColor: '#f8d7da',
        color: '#721c24',
        borderColor: '#f5c6cb',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 10
    }
});
