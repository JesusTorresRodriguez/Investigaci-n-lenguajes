import React, { Component } from "react";
import {
    View,
    Text,
    Alert,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity
} from "react-native";

class HomeScreen extends Component {

    

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Electronics')}>
                    <Image
                        style={{
                            height: 150, width:150
                        }}
                        source={{
                            uri:  'https://www.aletem.com.br/image/cache/catalog/Marcas/ELETRONICOS-600x315.png'
                        }}
                    />
                </TouchableOpacity>

                <Text></Text>    
                <Text></Text>
                
                <Button title="Electrónicos"
                    onPress={() => this.props.navigation.navigate('Electronics')} 
                    color='#000000'
                    />

                <Text></Text>    
                <Text></Text>
                <Text></Text>    
                <Text></Text>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Books')}>
                    <Image
                        style={{
                            height: 150, width:150
                        }}
                        source={{
                            uri: 'https://static.websguru.com.ar/var/m_e/e4/e43/50477/751999-book1.png'
                        }}
                    />
                </TouchableOpacity>

                <Text></Text>    
                <Text></Text>

                <Button title="Libros" 
                    onPress={() => this.props.navigation.navigate('Books')} 
                color='#000000'
                />

                

            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color:'#fff',
    },
    Button:{
        color:'#000000'
    },
});