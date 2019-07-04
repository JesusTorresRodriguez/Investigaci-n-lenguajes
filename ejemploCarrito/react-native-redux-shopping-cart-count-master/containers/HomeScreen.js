import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={{
                        uri: 'https://previews.123rf.com/images/fad82/fad821403/fad82140300166/28252603-iconos-del-web-de-la-tecnolog%C3%ADa-inform%C3%A1tica-y-aparatos-electr%C3%B3nicos.jpg',
                        method: 'POST',
                        headers: {
                            Pragma: 'no-cache',
                        },
                        body: 'Your Body goes here',
                    }}
                    style={{ width: 100, height: 100 }}
                />

                <Button title="Electrónicos"
                    onPress={() => this.props.navigation.navigate('Electronics')} />

                <Image
                    source={{
                        uri: 'https://www.concienciaeco.com/wp-content/uploads/2013/08/libros.jpg',
                        method: 'POST',
                        headers: {
                            Pragma: 'no-cache',
                        },
                        body: 'Your Body goes here',
                    }}
                    style={{ width: 100, height: 100 }}
                />
                <Button title="Libros"
                    onPress={() => this.props.navigation.navigate('Books')} />
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
});