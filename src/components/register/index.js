import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Dimensions } from 'react-native';
import { withTheme, TextInput, Button, Snackbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 'stage2'
        }
    }

    componentDidMount(){
        console.log('HALAMAN REGISTER')
    }

    changePage1 = () => {
        this.setState({
            page: 'stage2'
        })
    }

    changePage2 = () => {
        this.setState({
            page: 'stage1'
        })
    }

    render(){

        const { page } = this.state

        return(
            <ScrollView style={{backgroundColor: '#00C5C5'}}>
                <View style={{ width: Width * 0.8, margin: Width * 0.1, marginTop: Height * 0.25 }}>
                    {
                        page === 'stage1' ? 
                        <View> 
                            <TextInput 
                                label='Username'
                                value={'test'}
                                underlineColor="transparent"
                                style={styles.formInput}
                            />
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
                                onPress={this.changePage1}
                                style={styles.button}
                                labelStyle={{ color: "#13A392", fontSize: 14 }}
                            > 
                            <Icon name="angle-right" size={20} color="#373737" style={{alignSelf:"center"}} /> </Button>
                        </View>
                        :
                        <View style={{flexDirection: 'column'}}> 
                            <View style={{ width: Width * 0.8, height: Height * 0.4, backgroundColor: 'red', borderRadius: 15 }} />
                            <View style={{flexDirection: 'row'}}> 
                                <Button
                                    mode="contained"
                                    loading={false}
                                    disabled={false}
                                    onPress={this.changePage2}
                                    style={styles.button}
                                    labelStyle={{ color: "#13A392", fontSize: 14 }}
                                > 
                                <Icon name="angle-left" size={20} color="#373737" style={{alignSelf:"center"}} /> </Button>
                                <Button
                                    mode="contained"
                                    loading={false}
                                    disabled={false}
                                    // onPress={this.changePage2}
                                    style={styles.buttonAction}
                                    labelStyle={{ color: "#13A392", fontSize: 14 }}
                                > REGISTER </Button>
                            </View>
                        </View>
                    }
                </View>
                
                <View style={{padding: 15, justifyContent:"space-between", alignSelf: 'center'}}>
                    <Text style={{color: '#ffffff',}} onPress={()=> this.props.navigation.navigate('Login')}>
                        Sudah Punya Akun? Login
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
        width: Width * 0.1,
        marginTop:20,
        paddingVertical: 5,
        borderRadius: 50,
        textShadowColor: '#13A392',
        backgroundColor: '#ffffff',
    },
    buttonAction:{
        width: Width * 0.6,
        marginTop:20,
        marginLeft: 20,
        paddingVertical: 5,
        borderRadius: 50,
        textShadowColor: '#13A392',
        backgroundColor: '#ffffff',
    },
});

export default Register