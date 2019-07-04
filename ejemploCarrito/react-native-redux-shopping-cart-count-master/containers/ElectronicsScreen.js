import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import {electronics} from '../Data';
import Products from '../components/Products';
import {connect} from 'react-redux';

class ElectronicsScreen extends Component{

    static navigationOptions = {
        headerTitle: 'Electrónicos'
    }
    render(){
        return (
            <ScrollView>  
            <View style={styles.container}>
                <Products products = {electronics} onPress=
                {this.props.addItemToCart} />
            </View>
            </ScrollView>   
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addItemToCart:(product) => dispatch({type:'ADD_TO_CART',
    payload:product})
    }
}
export default connect(null, mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});