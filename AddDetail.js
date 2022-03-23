import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput, StyleSheet
} from 'react-native';
import ButtonComponent from './ButtonComponent';
export default class AddDetail extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            gender: '',
            email: '',
            status: '',
        }
    }

    isValidEmail = (value) => {
        const regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        return regx.test(value)
    }


    check = () => {
        if (!this.state.name) {
            alert('enter name');
            return;
        }
        else if (this.state.name.length >= 25) {
            alert('enter valid name');
            return;
        }
        else if (!this.state.email) {
            alert('enter emailID');
            return;
        }
        // else if (!this.isValidEmail(this.state.emailId)) {
        //     alert("please enter valid email");
        //     return;
        // }
        else if (!this.state.gender) {
            alert('enter gender');
            return;
        }
        else if (!this.state.status) {
            alert('enter status');
            return;
        }
    }
    addDetailsRequest = async () => {
        //this.check();
        const result= await fetch('https://gorest.co.in/public/v2/users',
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
                    //'Accept': "application/json",
                },
            body:JSON.stringify({
                name:this.state.name,
                gender: this.state.gender,
                email: this.state.email,
                status:this.state.status, 
            })
            })
        console.log('result111', this.state.email)
                .catch(error => console.log(error)) //to catch the errors if any)
            console.log('result123 ', result)
    }

    render() {

        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Name :-</Text>
                    <TextInput
                        placeholder="Enter name"
                        style={styles.txtinp1}
                        onChangeText={(name) => this.setState({ name: name })}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Gender :-</Text>
                    <TextInput
                        placeholder="Enter gender"
                        style={styles.txtinp1}
                        onChangeText={(gender) => this.setState({ gender: gender })}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Email Id :-</Text>
                    <TextInput
                        placeholder="Enter emailID"
                        style={styles.txtinp1}
                        onChangeText={(email) => this.setState({ email: email })}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Status :-</Text>
                    <TextInput
                        placeholder="Enter status"
                        style={styles.txtinp1}
                        onChangeText={(status) => this.setState({ status: status })}
                    />
                </View>
                <ButtonComponent title={'Add to List'} onPress={this.addDetailsRequest} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row'
    },
    heading: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 15
    },

})