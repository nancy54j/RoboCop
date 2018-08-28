import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchbleOpacity,
    LayoutAnimation,
    NativeModules,
} from 'react-native';


export default class HelloWorldApp extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
    <Image source={pic} style={{width: 200, height: 110}}/>
        <Text style = {styles.hello}>Simple Text!</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        borderRadius: 1,
        borderWidth: 20,
        borderColor: 'white',
    },
    hello: {
        color: 'red',
        //marginLeft: 50% 100,
        //marginTop:50% 100,
        alignItems: 'center',
        //marginRight:
        //marginBotton:
        //justifyContent: 'center',
        fontSize:50,
    },
});

