import React from 'react';
import { View, Text, Image } from 'react-native';
import {TweetType} from "../../../../types";
import {Entypo, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import styles from "./styles";

export type FooterContainerProps = {
    tweet: TweetType
}

const Footer = ({tweet} : FooterContainerProps) => (
    <View style={styles.container}>
        <View style={styles.IconContainer}>
            <Feather name={"message-circle"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfComments}</Text>
        </View>

        <View style={styles.IconContainer}>
            <EvilIcons name={"retweet"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View >

        <View style={styles.IconContainer}>
            <AntDesign name={"hearto"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfLikes}</Text>
        </View>

        <View style={styles.IconContainer}>
            <EvilIcons name={"share-google"} size={20} color={'grey'} />
            <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
        </View>
    </View>
);

export default Footer;