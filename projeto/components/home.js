import { rows } from "pg/lib/defaults";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'


class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image style={{ width: 120, height: 90 }} source={require('../assets/gscredi.png')} />
                    <Text style={styles.text}>Gscredi</Text>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.props.navigation.navigate('')}>
                        <Text style={styles.submitButtonText}> Simular credito </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.submitButtonText}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.props.navigation.navigate('Ajuda')}>
                        <Text style={styles.submitButtonText}> Cadastrar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => this.props.navigation.navigate('Recuperar senha')}>
                        <Text style={styles.submitButtonText}> Recuperar senha </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        );
    }
}
export default Home


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 100,
        width: '100%',
        height: '20%',
        backgroundColor: '#F3F3F3'

    },
    containerButton: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 100,
        width: '100%',
        height: '40%',


    },
    submitButton: {
        backgroundColor: '#14b4a8',
        padding: 12,
        margin: 5,
        height: 45,
        borderRadius: 20,
        width: '40%',
        alignItems: "center"


    },
    submitButtonText: {
        color: 'white',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#14b4a8',

    },

    containerWrap: {
        width: 200,
        height: 160,

    }
})