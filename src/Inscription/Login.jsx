import React from 'react'
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Login({ navigation }) {
    return (
        <View style={styles.fleche}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Image
                style={styles.img1}
                    source={require('../../assets/icon.png')}
                />
            </TouchableOpacity>
            <Text style={styles.sign}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder='email'
            />
            <TextInput
                style={styles.input}
                placeholder='password'
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.next}
            onPress={() => navigation.navigate('Forgot')}
            >
                 <Text>Forgot your password?</Text>
                 <Image
                    source={require('../../assets/arrowRight.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUp}
                onPress={() => navigation.navigate('Acceuil')}>
                <Text style={styles.textSignUp}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.account}>Or sign with social account</Text>
            <View style={styles.groupe}>
                <TouchableOpacity style={styles.google}
                >
                    <Image
                        source={require('../../assets/google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebook}
                >
                    <Image
                        source={require('../../assets/facebook.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    fleche: {
        backgroundColor: "whitesmoke",
        padding: 20,
        paddingBottom: 100
    },
    img1: {
        marginVertical: 30
    },
    sign: {
        fontSize: 22,
        paddingTop: 5,
        paddingBottom: 35
    },
    input: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        marginBottom: 10
    },
    next: {
        flexDirection: "row",
        justifyContent:"flex-end",
        fontSize: 15,
        textAlign: "right",
    },
    SignUp: {
        backgroundColor: "#DB3022",
        color: "white",
        textAlign: "center",
        padding: 13,
        borderRadius: 50,
        marginTop: 35,
        marginBottom: 100
    },
    textSignUp: {
        color: "white",
        textAlign: "center",
    },
    account: {
        textAlign: "center"
    },
    groupe: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    google: {
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "white",
        borderRadius: 30,
        marginEnd: 10
    },
    facebook: {
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "white",
        borderRadius: 30,
        marginStart: 10
    }
});