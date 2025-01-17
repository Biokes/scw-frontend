import React, { useState, useEffect } from 'react';
import {FlatList, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import { fetchNotifications } from '@/api/app_apis';

export default function Notifications (){
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState('')

    useEffect(() => {
        const loadNotifications = async () => {
            setLoading(true);
            try {
                const data = await fetchNotifications();
                setNotifications(data);
            } catch (error) {
                console.error('Failed to load notifications:', error);
            } finally {
                setLoading(false);
            }
        }
        loadNotifications();
    }, []);

    return (
        <View>
                {
                    loading ? (
                        <ActivityIndicator size="small" />
                    ) : (
                        notifications?
                            <FlatList
                                data={notifications}
                                renderItem={({ item }) => <Text>{item.message}</Text>}
                                keyExtractor={(item) => item.id.toString()}
                            />
                            :
                            <Text className={'text-[10px] font-[600] flex items-center justify-center text-nowrap'}>No notification yet</Text>
                    )
                }
        </View>
    );
};
