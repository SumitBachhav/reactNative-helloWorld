import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style = {styles.container}>
            <Text style = {isDarkMode ? styles.whitetext: styles.whitetext}>
                Hello
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whitetext:{
        color: '#FFFFFF'
    },
    darkText:{
        color: '#000000'
    }
})


export default AppPro


//JSX.Element means return type
//alignItems -> left to right
//justifyContent -> top to bottom
