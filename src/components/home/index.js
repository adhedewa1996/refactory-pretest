import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Dimensions } from 'react-native';
import { fetchSeenOn, fetchPartner } from './../../_redux/actions';
import { connect } from 'react-redux'

class Home extends Component {

    componentDidMount(){
        this.props.getSeenOn();
        this.props.getPartner()
        console.log(this.props.as_seen_on)
    }

    render() {
        return(
            <ScrollView>
                <View>
                    <Text>
                        INI HOME
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        as_seen_on: state.as_seen_on.items,
        partner: state.partner.items,
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        getSeenOn: () => dispatch(fetchSeenOn()),
        getPartner: () => dispatch(fetchPartner())
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)