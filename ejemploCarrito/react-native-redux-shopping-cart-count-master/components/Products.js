import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    Image,
    TouchableOpacity
} from "react-native";

class Products extends Component {

    messageImage = (item) => {
        
            return (
               Alert.alert( item.name + ", Descripción: " + item.descripcion)
            )
        
    }

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{padding: 10}}>

                <TouchableOpacity onPress={()=>this.messageImage(item)}>
                    <Image
                        style={{
                            height: 150, width:150
                        }}
                        source={{
                            uri: item.image
                        }}
                    />
                </TouchableOpacity>

                    <Text style={styles.fontLetra}>{ item.name + " -> $" + item.price}</Text>

                    <Button onPress={() => this.props.onPress(item)}
                        title={"Seleccionar"} />

                </View>

            )
        })
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontLetra: {
        textAlign: 'center',
        fontSize: 20
    }

});
