import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Dimensions } from 'react-native';
import { withTheme, TextInput, Button, Snackbar } from 'react-native-paper'
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class Login extends Component {

    componentDidMount(){
        console.log('HALAMAN LOGIN')
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#00C5C5'}}>
                <View style={{ width: Width * 0.8, margin: Width * 0.1, marginTop: Height * 0.25 }}>
                    <TextInput 
                        label='Email'
                        value={'test'}
                        underlineColor="transparent"
                        style={styles.formInput}
                    />
                    <TextInput 
                        label='Password'
                        value={'tes121t'}
                        underlineColor="transparent"
                        style={styles.formInput}
                    />
                    <Button
                        mode="contained"
                        loading={false}
                        disabled={false}
                        // onPress={this.onButtonPress}
                        style={styles.button}
                        labelStyle={{ color: "#13A392", fontSize: 14 }}
                    > LOGIN </Button>
                </View>
                
                <View style={{padding: 15, justifyContent:"space-between", alignSelf: 'center'}}>
                    <Text style={{color: '#ffffff',}} onPress={()=> this.props.navigation.navigate('Register')}>
                        Belum Punya Akun? Daftar
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formInput:{
        marginTop: 20,
        borderBottomWidth: 0,
        borderRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: 'white',
        height: 55,
    },
    button:{
        marginTop:20,
        paddingVertical: 5,
        borderRadius: 15,
        textShadowColor: '#13A392',
        backgroundColor: '#ffffff'
    },
});

export default Login