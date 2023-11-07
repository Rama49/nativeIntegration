import React from 'react'
import { Image, View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function SignUp({ navigation })  {
    return (
        <View style={styles.fleche}>
            <TouchableOpacity style={styles.img1}
                onPress={() => navigation.navigate('SignUp')}>
                <Image
                    source={require('../../assets/icon.png')}
                />
            </TouchableOpacity>

            <Text style={styles.sign}>SignUp</Text>

            <TextInput
                style={styles.input}
                placeholder='Name'
            />
            <TextInput
                style={styles.input}
                placeholder='email'
            />
            <TextInput
                style={styles.input}
                placeholder='Number'
                keyboardType="phone-pad"
            />

            <TouchableOpacity style={styles.next}
            onPress={() => navigation.navigate('SignUp')}
            >
                <Text>Already have an account?</Text>
                <Image
                    source={require('../../assets/arrowRight.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUp}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textSignUp}>SignUp</Text>
            </TouchableOpacity>
            
            <Text style={styles.account}>Or sign with social account</Text>
            <View style={styles.groupe}>
                 <TouchableOpacity style={styles.google}
                    onPress={SignUp}> 
                     <Image
                        source={require('../../assets/google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebook}
                    onPress={SignUp}> 
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
        paddingVertical: 30
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
        padding: 13,
        borderRadius: 50,
        marginTop: 35,
        marginBottom: 100
    },
    textSignUp: {
        color: "white",
        textAlign: "center"
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