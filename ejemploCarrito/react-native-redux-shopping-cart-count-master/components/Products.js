import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image 
} from "react-native";

class Products extends Component{

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{padding:10}}>

            <Image 
                source={{
                    uri: item.image,
                    method: 'POST',
                    headers: {
                    Pragma: 'no-cache',
                    },
                    body: 'Your Body goes here',
                }}
                style={{width: 100, height: 100}}
            />

                <Text>{item.name + " - " + item.price}</Text>

                    <Button onPress={() => this.props.onPress(item)}
                    title={"Añadir"} />
                </View>
            )
        })
    }

    render() {
        return(
            <View style={StyleSheet.container}>
            {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
