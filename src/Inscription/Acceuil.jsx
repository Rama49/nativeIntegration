import React from 'react'
import { ImageBackground, Text, StyleSheet, ScrollView, View, Image, TouchableOpacity} from 'react-native'


const image = require('../../assets/image.png') ;

export default function Acceuil({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.para}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Image
               
                    source={require('../../assets/icon.png')}
                />
            </TouchableOpacity>
            <Text style={styles.visual}>Visual Search</Text>
            </View>
            <ImageBackground source={image}  style={styles.acceuil}>
         <Text style={styles.for}>Search for an outfit by taking a photo or uploading an image</Text>
         <TouchableOpacity style={styles.SignUp}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textSignUp}>Take a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upload}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textupload}>UPLOAD AN IMAGE</Text>
            </TouchableOpacity>
        </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    acceuil: {
        padding: 20,
    },
    para: {
        flexDirection: "row",
        paddingTop: 50,   
        paddingBottom: 10
    },
    for: {
        fontSize: 20,
        color: "white",
        paddingTop: 200
    },
    SignUp: {
        backgroundColor: "#DB3022",
        color: "white",
        textAlign: "center",
        padding: 13,
        borderRadius: 50,
        marginTop: 35,
    },
    textSignUp: {
        color: "white",
        textAlign: "center",
    },
    upload: {
        borderWidth: 1,
        borderColor: "white",
        textAlign: "center",
        padding: 13,
        borderRadius: 50,
        marginTop: 15,
        border: "white",
        marginBottom: 330
    },
    textupload: {
        color: "white",
        textAlign: "center",
    },
    visual: {
        marginHorizontal: 100
    }
})