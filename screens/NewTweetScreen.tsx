import * as React from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { Text, View } from '../components/Themed';
import {AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import {useState} from "react";
import {API, graphqlOperation, Auth} from 'aws-amplify';
import { createTweet } from '../graphql/mutations';
import {useNavigation} from "@react-navigation/native";


export default function NewTweetScreen() {
    const[tweet, setTweet] = useState("");
    const[imageUrl, setImageUrl] = useState("");

    const navigation = useNavigation();

    const onPostTweet = async () => {
        // console.log(`Posting the tweet: ${tweet} Image: ${imageUrl}`);

        try{
            const currentUser = await Auth.currentAuthenticatedUser({bypassCache:true});
            const newTweet = {
                content: tweet,
                image: imageUrl,
                userID: currentUser.attributes.sub,
            }
            await API.graphql(graphqlOperation(createTweet, {input: newTweet}))
            navigation.goBack();

            // console.warn("Tweet posted");
        }
        catch (e){
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign  name ="close" size={30} color={Colors.light.tint} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.newTweetContainer}>
                <ProfilePicture image={'https://avatars2.githubusercontent.com/u/30752963?s=400&u=a7fe229140729395e1ebceae6bcf607e3aecb8f3&v=4'} />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={tweet}
                        onChangeText={(value) => setTweet(value)}
                        multiline={true}
                        numberOfLines={3}
                        style={styles.tweetInput}

                        placeholder={"What's happening"}
                    />
                    <TextInput
                        value={imageUrl}
                        onChangeText={(value) => setImageUrl(value)}
                        style={styles.imageInput}
                        placeholder={"Image url (optional)"}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
        // justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },

    buttonText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputContainer: {
        marginLeft: 10,
    },
    tweetInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 20,
    },
    imageInput: {

    },
});
