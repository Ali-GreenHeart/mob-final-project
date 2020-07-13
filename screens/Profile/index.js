import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import {CustomBtn, CustomHeader, CustomText} from "../../components";
import store from "../../store";
import {changeProfilePhoto, logout} from "../../store/userCredentials";
import fbApp from "../../store/firebase";
import {Nav} from "../../navigation/Nav";
import {CustomLinear} from "../../components/customLinear";
import {COLORS} from "../../styles/colors";
import {BackgroundBubbles} from "../../components/background-bubbles";
import {WarningModal} from "../../components/warningModal";
import Male1 from "./images/Male1.png"
import Male2 from "./images/Male2.png"
import Male3 from "./images/Male3.png"
import Male4 from "./images/Male4.png"
import Female1 from "./images/Female1.png"
import Female2 from "./images/Female2.png"
import Female3 from "./images/Female3.png"
import Female4 from "./images/Female4.png"



const windowSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
export const ProfileScreen = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState(null);
    const [temp, setTemp] = useState(null);
    const [changePhoto, setChangePhoto] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState(store.getState().userCredentials.img || require('./images/Male1.png'));
    const photoList = [
        Male1,Male2,Male3,Male4,Female1,Female2,Female3,Female4
    ];
    const SignOut = () => {
      store.dispatch(logout());
      //write navigation code here please
        navigation.navigate('Home');
    };
    const closeModal = () => {
      setShowModal(false);
      setChangePhoto(false);
    };
    const confirm = (item) =>{
        setMessage("Are you sure to choose this photo?");
        setShowModal(true);
        setTemp(item);
    };
    const choose = () => {
        setPhoto(temp);
        setShowModal(false);
    };
    const setPhoto = (item) => {
        setChosenPhoto(item);
        setChangePhoto(false);
        fbApp.auth.currentUser.updateProfile({photoURL: item});
        store.dispatch(changeProfilePhoto({img: item}));
    };
    return (
        <CustomLinear>
            <BackgroundBubbles/>
            <CustomHeader name={"My Profile"} navigation={navigation} back={false} />
            <ScrollView style={styles.container}>
            <View style={styles.imageWrapper}><Image source={chosenPhoto} style={styles.profileImg}/></View>
            <CustomText style={styles.name} weight={"semi"}>{store.getState().userCredentials.fullName}</CustomText>

                <View >
                    <CustomBtn style={styles.btn} onPress={() => setChangePhoto(true)} title={"Change photo"} color={COLORS.secondWarning}/>
                    <CustomBtn style={styles.btn} title={"Sign out"} onPress={() => SignOut()} color={COLORS.secondWarning}/>
                </View>
                { changePhoto &&
                <View style={styles.gallery}>
                    <View style={styles.galleryHdr}>
                        <CustomText style={styles.galleryTitle}>Choose profile photo</CustomText>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <View style={styles.iconContainer}>
                                <CustomText weight={"bold"} style={styles.Icon}>X</CustomText>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.imageContainer}>
                        {photoList.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() =>confirm(item)}>
                                <View>
                                    <Image source={item} style={styles.galleryImage}/>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                }

        </ScrollView>
            <Nav navigation={navigation} />
            {showModal && <WarningModal message={message} functionality={[{button: 'Cancel', onPress: closeModal},{button: 'Choose', onPress: choose}]}/>}
        </CustomLinear>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       zIndex: 2,
   },
    gallery: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    galleryImage: {
       width: (windowSize.width-100)/2.6,
        height: (windowSize.height-100)/3.8,
    },
    galleryHdr: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        marginHorizontal: 15,
        marginVertical: 10,
        borderBottomColor: '#74B9FF',
        borderBottomWidth: 1,
        paddingBottom: 2

    },
    galleryTitle: {
        fontSize: 20
    },
    iconContainer: {
        backgroundColor: COLORS.mainWarning,
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center"
    },
    Icon: {
        fontSize: 25,
        color: 'white',
    },
    profileImg: {
        width: 220,
        height: 220,
        borderRadius: 250,
    },
    name: {
       alignSelf: "center",
       marginTop: 20,
       marginBottom: 15,
        fontSize: 24,
        color: 'white'
    },
    checkContainer: {
        backgroundColor: 'rgba(50,50,50,0.5)',
    },
    btn: {
        width: "50%",
        alignSelf: "center",
        marginVertical: 10
    },
    imageWrapper: {
       // borderWidth: 2,
       //  borderColor: 'white',
        borderRadius: 250,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignSelf: "center",
        marginTop: 70
    },
    close: {
       position: 'absolute',
        top: 0,
        fontSize: 36,
    }
});
