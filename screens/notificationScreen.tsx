import {SafeAreaView, TouchableOpacity, View} from "react-native";
import Navbar from "@/components/commons/navbar";
import Notifications from "@/components/notifications";
import {goBack} from "expo-router/build/global-state/routing";
import {MaterialIcons} from "@expo/vector-icons";
import React from "react";

export default function NotificationScreen(){

    const Back = ()=>{
        return (
            <View className={'bg-gray-300 py-[15px] px-[20px] shadow-2xl flex flex-row justify-between items-center w-full'}>
                <TouchableOpacity onPress={goBack} className={'shadow-md rounded-md p-[10px] hover:bg-gray-600'}>
                    <MaterialIcons name={'arrow-back'} size={15} color={'blue'} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView className={'h-full bg-white'}>
            <Back/>
            <Notifications/>
        </SafeAreaView>
    )
}