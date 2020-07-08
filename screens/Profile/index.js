import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import {CustomBtn, CustomText} from "../../components";
import store from "../../store";
import {logout} from "../../store/userCredentials";
import fbApp from "../../store/firebase";
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
            <View style={styles.imageWrapper}><Image source={chosenPhoto} style={styles.profileImg}/></View>
            <CustomText>{store.getState().userCredentials.fullName}</CustomText>
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
                <View>
                    <CustomBtn onPress={() => setChangePhoto(true)} title={"Change photo"}/>
                    <CustomBtn title={"Sign out"} onPress={() => SignOut()}/>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   },
    imageContainer: {
        position: 'absolute',
        flex: 1,
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
    checkContainer: {
       backgroundColor: 'rgba(50,50,50,0.5)',
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
    }
});
