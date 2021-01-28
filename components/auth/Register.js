import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    let onSignUp = () => {
        
    }

    return (
        <View>
            <TextInput placeholder="name" onChangeText={(e) => setName(e.target.value)} />
            <TextInput placeholder="email" onChangeText={(e) => setEmail(e.target.value)} />
            <TextInput placeholder="password" secureTextEntry={true} onChangeText={(e) => setPassword(e.target.value)} />

            <Button onPress={() => onSignUp()} title="Sign Up" />
        </View>
    )
}
