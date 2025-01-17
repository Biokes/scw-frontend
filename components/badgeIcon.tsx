import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

type BadgeIconProps = {
    iconName: string;
    badgeCount: number;
    iconSize?: number;
    iconColor?: string;
    badgeColor?: string;
};

export default function  BadgeIcon(props:BadgeIconProps){
    return (
        <View style={styles.iconContainer}>
            <MaterialIcons name={props.iconName} size={props.iconSize} color={props.iconColor} />
            {props.badgeCount > 0 && (
                <View style={[styles.badgeContainer, { backgroundColor: props.badgeColor }]}>
                    <Text style={styles.badgeText}>
                        {props.badgeCount > 99 ? "99+" : props.badgeCount}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        position: "relative",
    },
    badgeContainer: {
        position: "absolute",
        right: -8,
        top: -5,
        backgroundColor: "red",
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 4,
    },
    badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
});