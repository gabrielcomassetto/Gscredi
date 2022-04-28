import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NativeScreenNavigationContainer } from 'react-native-screens'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handleSenha = (text) => {
        this.setState({ senha: text })
    }
    login = (email, senha) => {
        alert('email: ' + email + ' senha: ' + senha)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#14b4a8"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Senha"
                    placeholderTextColor="#14b4a8"
                    autoCapitalize="none"
                    onChangeText={this.handleSenha}
                    secureTextEntry={true} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Entrar </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Recuperar senha')}>
                    <Text style={styles.submitButtonText}> Recuperar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Ajuda')}>
                    <Text style={styles.submitButtonText}> Ajuda </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Login

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