import {View} from "react-native";
import {Link} from "expo-router";

export default function Notifications(){
    return (
        <View>
            <Text>Notifications</Text>
            <View>
                <Link href={'/notifications'}>View All Notification</Link>
            </View>
        </View>
    )
}