import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class recsenha extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Recuperar senha</Text>
                <Text>Digite o e-mail que deseja recuperar a senha</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#14b4a8"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Enviar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default recsenha

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 200,
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F3F3'

    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#14b4a8',
        borderWidth: 2,
        width: '65%',
        borderRadius: 15,
        alignItems: 'center'
    },
    submitButton: {
        backgroundColor: '#14b4a8',
        padding: 12,
        margin: 5,
        height: 45,
        borderRadius: 20,
        width: '40%',
        alignItems: 'center',

    },
    submitButtonText: {
        color: 'white',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#14b4a8',

    }
})