import React from 'react'
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Login({ navigation }) {
    return (
        <View style={styles.fleche}>
            <TouchableOpacity onpress="SignUp">
                <Image
                    style={styles.img1}
                    source={require('../../assets/icon.png')}
                />
            </TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password</Text>
            <Text style={styles.link}>Please, enter your email adress. You will receive a link to create a new password via email.</Text>
            <TextInput
                style={styles.input}
                placeholder='email'
            />

        <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}  style={styles.send}>
                <Text style={styles.textsend}>Send</Text>
        </TouchableOpacity>

           
        </View>
    )
}


const styles = StyleSheet.create({
    fleche: {
        backgroundColor: "whitesmoke",
        padding: 20,
        paddingBottom: 500
    },
    img1: {
       marginVertical: 30
    },
    forgot: {
        fontSize: 25,
        paddingTop: 5,
        paddingBottom: 95
    },
    input: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        marginBottom: 10
    },
    next: {
        fontSize: 15,
        textAlign: "right"
    },
    send: {
        backgroundColor: "#DB3022",
        color: "white",
        textAlign: "center",
        padding: 13,
        borderRadius: 50,
        marginTop: 35,
        marginBottom: 100
    },
    link: {
        fontSize: 14,
        paddingBottom: 30
    },
    textsend: {
        color: "white",
        textAlign: "center"
    }
});