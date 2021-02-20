import React, { Component, component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ListItem, Badge } from 'react-native-elements'
import firebase from '../database/firebaseDb'

class UserScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ScrollView>
                <View>
                    <Text>Hello Man</Text>
                </View>
            </ScrollView>
        )
    }
}

export default UserScreen;