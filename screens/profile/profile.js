import React from 'react';
import {View} from 'react-native';
import {CustomText} from "../../components";
import store from "../../store";
const Profile = () => {
    return (
        <View>
            <CustomText>{store.getState()}</CustomText>
        </View>
    );
};

export default Profile;
