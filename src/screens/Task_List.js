import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity } from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

import today_Image from "../../assets/imgs/today.jpg"

import Task from "../components/Task"
import { Icon } from "react-native-vector-icons/Icon"
import Icon from "react-native-vector-icons/FontAwesome6"


export default class TaskList extends Component {

state = {
    show_done_task: true,
    visible_tasks:[],


    tasks:[{
        id: Math.random(),
        description: "Terminar TCC",
        estimate_at: moment(new Date()),
        done_at: moment(new Date())
    },
    {
        id: Math.random(),
        description: "Apresenter TCC",
        estimate_at: moment(new Date()).add(60, "days"),
        done_at: null
    },
]}

componentDidMount =  () => {
    this.filter_tasks()
}



filter_tasks = () => {
    let visible_tasks = null
    if(this.state.show_done_task){
        visible_tasks = [this.state.tasks]
    }else{
        const pending = task => task.done_at === null
        visible_tasks = this.state.task.filter(pending)
    }
    this.setState({visible_tasks})
}



toggle_task = task_id =>{
    const tasks = [...this.state.tasks]
    tasks.forEach(task =>{
        if(task.id === task_id){
            task.done_at = task.done_at !=null ? null : new Date()
        }
    })
    this.setState({tasks})
}
toggle_filter = () => {
    this.setState({show_done_task: !this.state.show_done_task}, this.filter_tasks)
}

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                   <view style={styles.icon_bar}>
                   <TouchableOpacity onPress={this.toggle_filter}>
                    <Icon name={this.show_done_task ? 'eye' : 'eye-splash'} size={20} color="#FFF"></Icon>
                   </TouchableOpacity>
                   <Icon name="eye" size={20} color="#FFF"></Icon>

                   </view>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                <FlatList
                data={this.state.visible_tasks}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Task {...item} taggle_task = {this.toggle_task} />}
                />
                   {/*Task description={"terminar TCC"}
                        estimate_at={moment(new Date())}
                        done_at={moment(new Date())} />
                    <Task description={"apresentar TCC"}
                        estimate_at={moment(new Date()).add(5, "days")}
                        done_at={null} />
                    <Task description={"Tarefa 3"}
                        estimate_at={moment(new Date()).add(10, "days")}
                        done_at={moment(new Date())} />*/}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    },
    icon_bar:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'flex-end'
    }
})





