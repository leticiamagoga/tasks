import react from "react"
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native"
import moment from "moment"
import { Icon } from "react-native-vector-icons/FontAwesome6"

export default props => {
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback >{/*elemento tocavel faz alteraçoes com toque*/}
        <View>
        <Icon name="check" size={20} color="#FFF"/>

        </View>

        </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{props.estimate_at + ""}</Text>
                <Text style={styles.date}>{props.done_at +""}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    checkContainer:{
        width:"20%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    done:{
        height: 25,
        width:20,
        borderRadius: 13,
        borderWidth:1,
        backgroundColor: "#4D7031",
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending:{
        height: 25,
        width:20,
        borderRadius: 13,
        borderWidth:1,
       borderColor: "#555"
    },
    desc:{
        fontFamily: "Ariel",
        fontSize: 20,
        color: "#333"

    },
    date:{
        fontFamily: "Ariel",
        color: "#333"
    }


})