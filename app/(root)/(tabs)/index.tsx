import {Text, TouchableOpacity, View} from "react-native";
import BadgeIcon from "@/components/badgeIcon";

export default function Index() {

    const Navbar=()=>{
        const viewNotifications=()=>{
        }
        return (
            <View className={'bg-gray-300 py-[15px] px-[20px] shadow-2xl flex flex-row justify-between items-center w-full'}>
                <Text className={'text-[20px] text-red-400 font-[750] uppercase'}>smc</Text>
                <TouchableOpacity onPress={viewNotifications} className={'shadow-md rounded-md p-[10px] hover:bg-gray-600'}>
                    <BadgeIcon badgeCount={0} iconName={'notifications'} badgeColor={'red'} iconColor={'black'} iconSize={18}/>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className={'flex flex-col'}>
            <Navbar/>
            <Text className={''}>
                Home page
            </Text>
        </View>
    )


}
