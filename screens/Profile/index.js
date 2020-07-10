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
            <CustomHeader name={changePhoto ? "Choose profile photo" : "My Profile"} navigation={navigation} back={false} setPhoto={changePhoto} onPress={closeModal}/>
            <View style={styles.container}>
            <View style={styles.imageWrapper}><Image source={chosenPhoto} style={styles.profileImg}/></View>
            <CustomText style={styles.name} weight={"semi"}>{store.getState().userCredentials.fullName}</CustomText>
            { changePhoto &&
            <View style={styles.gallery}>
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
            {!changePhoto &&
                <View >
                    <CustomBtn style={styles.btn} onPress={() => setChangePhoto(true)} title={"Change photo"} color={COLORS.mainBg}/>
                    <CustomBtn style={styles.btn} title={"Sign out"} onPress={() => SignOut()} color={COLORS.mainBg}/>
                </View>
            }
            <Nav navigation={navigation} />
        </View>
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
        zIndex: 4,
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
    profileImg: {
        width: 220,
        height: 220,
        borderRadius: 250,
    },
    name: {
       alignSelf: "center",
       marginTop: 20,
       marginBottom: 20,
        fontSize: 24,
        color: 'white'
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
