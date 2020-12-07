import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {TweetType} from "../../../../types";
import {Entypo, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import styles from "./styles";

export type FooterContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet}: FooterContainerProps) => {

    const onLike = async () => {
        console.warn("Like pressed");
    }

    return (
        <View style={styles.container}>
            <View style={styles.IconContainer}>
                <Feather name={"message-circle"} size={22} color={'grey'}/>
                <Text style={styles.number}>{tweet.numberOfComments}</Text>
            </View>

            <View style={styles.IconContainer}>
                <EvilIcons name={"retweet"} size={28} color={'grey'}/>
                <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
            </View>

            <View style={styles.IconContainer}>
                <TouchableOpacity onPress={onLike}>
                    <AntDesign name={"hearto"} size={20} color={'grey'}/>
                </TouchableOpacity>
                <Text style={styles.number}>{tweet.numberOfLikes}</Text>
            </View>

            <View style={styles.IconContainer}>
                <EvilIcons name={"share-google"} size={28} color={'grey'}/>
                <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
            </View>
        </View>
    )
};

export default Footer;