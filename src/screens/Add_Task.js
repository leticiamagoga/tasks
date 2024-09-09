import React,{Component} from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Modal
 } from "react-native";
 const estado_inicil = { desc: ''}
 export default class AddTask extends Component{

    state = {
        ...estado_inicil
    }

    render(){
        return(
            <Modal
                transparent = {true}
                visible={true}
                onRequestClose={this.props.cancelar}
                animationType="slide">
                <TouchableWithoutFeedback onPress={this.props.cancelar}>
                    <View style={style.fundo}> </View>
                </TouchableWithoutFeedback>
                <View style={style.principal}>
                <text style={style.cabecalho}>Nova Tarefa</text>
                <TextInput
                style={style.input}
                placeholder="Descrição da tarefa"
               onChange={desc => this.setState({desc})}
                value={this.state.desc}

                />
                <View style={style.botoes}>
                    <TouchableOpacity>
                        <Text style={style.botoes}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={style.botoes}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                 </View>
                <TouchableWithoutFeedback onPress={this.props.cancelar}>
                    <View style={style.fundo}> </View>
                </TouchableWithoutFeedback>

                
            </Modal>
        )
    }
 }

 const style = StyleSheet.create({
    fundo:{ 
        flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
    },
    principal:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor:'#B13B44',
        color: '#FFF',
        textAlign: 'center',
        pedding: 5,
        fontSize: 20

    },
    input:{
        height: 40,
        margin: 15,
        borderWidth: 1,
        backgroundColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    botao:{
        margin: 20,
        marginRight: 30,
        color: '#B13B44'
    }
 })