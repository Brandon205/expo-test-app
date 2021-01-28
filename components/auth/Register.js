import React, { useState } from 'react';
import firebase from 'firebase';
import { View, Button, TextInput } from 'react-native';

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    let onSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <View>
            <TextInput placeholder="name" onChangeText={(name) => setName(name)} value={name} />
            <TextInput placeholder="email" onChangeText={(email) => setEmail(email)} value={email} />
            <TextInput placeholder="password" secureTextEntry={true} onChangeText={(password) => setPassword(password)} value={password} />

            <Button onPress={() => onSignUp()} title="Sign Up" />
        </View>
    )
}
