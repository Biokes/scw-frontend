import {View} from "react-native";
import Navbar from "@/components/commons/navbar";
import {TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
    const navigation = useNavigation();

    return (
        <View className={'flex flex-col'}>
            <Navbar/>
            <TouchableOpacity onPress={navigateToNotificationPage}>
                <Text  className={'mt-[100px] ml-[10vw] flex p-[15px] text-red-400 bg-gray-200'}>View All Notifications</Text>
            </TouchableOpacity>
        </View>
    )


}
