import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    screen:{
    backgroundColor: '#fff',
    height: "100%"
    },
    
    przyciski: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginVertical: 5
    },


    show:{
        width: "100%",
        borderWidth: 1,
        height: 40,
        fontSize: 20,
        borderColor: "#000",
        textAlignVertical: 'center',
        padding: 5
    },

    wynik:{
        width: "100%",
        height: 40,
        fontSize: 32
    }
});