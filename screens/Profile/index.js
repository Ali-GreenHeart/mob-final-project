import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {CustomBtn, CustomHeader, CustomText} from "../../components";
import store from "../../store";
import {logout} from "../../store/userCredentials";
import fbApp from "../../store/firebase";
import {Nav} from "../../navigation/Nav";
const windowSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
export const ProfileScreen = ({navigation}) => {
    const [changePhoto, setChangePhoto] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState(fbApp.auth.currentUser.photoURL || require('./images/Male1.png'));
    const photoList = [
        require('./images/Male1.png'),
        require('./images/Male2.png'),
        require('./images/Male3.png'),
        require('./images/Male4.png'),
        require('./images/Female1.png'),
        require('./images/Female2.png'),
        require('./images/Female3.png'),
        require('./images/Female4.png')
    ];
    const SignOut = () => {
      store.dispatch(logout());
      //write navigation code here please
        navigation.navigate('Home');
    };
    const setPhoto = (item) => {
        setChosenPhoto(item);
        setChangePhoto(false);
        fbApp.auth.currentUser.updateProfile({photoURL: item})
    };
    return (
        <View style={styles.container}>
            <CustomHeader name={"Home"} navigation={navigation} back={true}/>
            <View style={styles.imageWrapper}><Image source={chosenPhoto} style={styles.profileImg}/></View>
            <CustomText style={styles.name}>{store.getState().userCredentials.fullName}</CustomText>
            { changePhoto &&
                <View style={styles.imageContainer}>
                    {photoList.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() =>setPhoto(item)}>
                            <View>
                                <Image source={item} style={styles.galleryImage}/>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            }
            {!changePhoto &&
                <View >
                    <CustomBtn style={styles.btn} onPress={() => setChangePhoto(true)} title={"Change photo"}/>
                    <CustomBtn style={styles.btn} title={"Sign out"} onPress={() => SignOut()}/>
                </View>
            }
            <Nav navigation={navigation} />

        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
    imageContainer: {
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    galleryImage: {
       width: (windowSize.width-100)/2,
        height: (windowSize.height-100)/3.5,
    },
    profileImg: {

        width: (windowSize.width)/2.3,
        height: (windowSize.width)/2.3,
        borderRadius: 250,
    },
    name: {
       alignSelf: "center",
       marginTop: 20,
       marginBottom: 20
    },
    checkContainer: {
        backgroundColor: 'rgba(50,50,50,0.5)',
    },
    btn: {
        width: 300,
        alignSelf: "center",
        marginVertical: 24
    },
    imageWrapper: {
       borderWidth: 2,
        borderColor: 'black',
        width: (windowSize.width)/2,
        height: (windowSize.width)/2,
        borderRadius: 250,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignSelf: "center",
        marginTop: 70
    }
});
