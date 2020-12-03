import React from "react";
import {View, Text, Image, FlatList} from 'react-native';
import {Entypo, Feather, EvilIcons, AntDesign} from "@expo/vector-icons";
import tweets from '../../data/tweets';
import Tweet from '../Tweet';

const Feed = () => (
    <View style={{width: '100%'}}>
        <FlatList
            data={tweets}
            renderItem={({item}) => <Tweet tweet={item} />}
            keyExtractor={(item) => item.id}
        />
    </View>
);

export default Feed;