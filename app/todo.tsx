import { View, Text, TouchableOpacity, TextInput, FlatList, StyleSheet} from "react-native";
import {IconButton , Modal} from "react-native-paper"
import { useState } from "react";  
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, deletetodo, updatetodo } from "./todoslice";
import { RootState } from "./todostore";

const Todo = () => {
    const [todoText, setText] = useState("");
    const [updateText, setUpdate] = useState("");
    const [todolist, setList] = useState([]);
    const [visible, setModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const showModal = () => setModal(true);
    const hideModal = () => setModal(false);
    const todoDispatch = useDispatch();
    const todoSelector =  useSelector((state: RootState)=> state.todo);

    const renderTodo = ({ item ,index }) => {
        console.log(todoSelector[index])
        return (
            <View style={style.todoItem}>
                <Text style={style.todoTitle}>{item.title}</Text>
                <View style={style.todoItemIcons}>
                    <IconButton
                        icon="delete"
                        iconColor="white"
                        onPress={()=> todoDispatch(deletetodo({id: todoSelector[index].id}))}
                    />
                    <IconButton
                        icon="pen"
                        iconColor="white"
                        onPressIn={()=> updateTodo(item.id,item.title)} 
                    />
                </View>
            </View>
        );
    };

    const addtodolist = () => {
        if (todoText.trim() !== "") {
            setList(prev => [...prev, { title: todoText, id: Date.now() }]);
            todoDispatch(addtodo({title: todoText}));
            setText("");
            console.log(todoSelector);
        } else {
            console.log("Plz Enter the text");
        }
    };

    const updateTodo = (id, text) => {
        setUpdate(text); 
        setCurrentId(id); 
        console.log("showmodal");
        showModal(); 
    };

    // const addUpdateTodo = () => {
    //     setList(todolist =>
    //         todolist.map(item =>
    //             item.id === currentId ? { ...item, title: updateText } : item
    //         )
    //     );
    //     hideModal(); // Hide modal after updating
    // };

    // const deleteTodo = id => {
    //     setList(todolist => todolist.filter(item => item.id !== id));
    // };

    return (
        <View style={style.mainConatiner}>
            <TextInput
                placeholder="Add Todo..."
                style={style.inputTextField}
                onChangeText={text => setText(text)}
                value={todoText}
            />
            <TouchableOpacity style={style.buttonContainer} onPress={addtodolist}>
                <Text style={style.buttonText}>Add Todo..</Text>
            </TouchableOpacity>
            <FlatList  centerContent={true} style={style.listItem} data={todoSelector} renderItem={renderTodo}/>


            <Modal style={style.modalContainer} visible={visible} onDismiss={hideModal}>
                <View style={style.modalBox}>
                    <TextInput
                        placeholder="Update Todo..."
                        style={style.inputTodoTextField}
                        onChangeText={text => setUpdate(text)}
                        value={updateText}
                    />
                    <TouchableOpacity style={style.buttonContainer} onPress={()=> {hideModal; todoDispatch(updatetodo({title:updateText,id:currentId}));}}>
                        <Text style={style.buttonText}>Update Todo</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default Todo;

const style = StyleSheet.create({
    mainConatiner: {
        padding: 10,
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputTextField: {
        fontSize: 14,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 7,
        height: 50,
        width: "80%",
    },
    inputTodoTextField: {
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 7,
        height: "15%",
        width: "100%",
    },
    listItem: {
        fontSize: 14,
        paddingLeft: 40,
        margin: 10,
        height: 50,
        width: "100%",
    },
    todoTitle: {
        fontSize: 15,
        fontWeight:"bold",
        color:"white",
    },
    todoItem: {
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 7,
        height: 50,
        width: "80%",
    },
    todoItemIcons: {
        justifyContent:"flex-end",
        flexDirection:"row",
        height: 50,
        width: 50,
    },
    icons: {
        color:"white",
    },
    buttonContainer: {
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 7,
        height: 50,
        width: "80%",
    },
    buttonText: {
        color: "white",
        fontSize: 14,
    },
    modalContainer: {
        backgroundColor: "transparent",
        flex:1,
        flexDirection:"column",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    modalBox: {
        padding:5,
        backgroundColor: "white",
        borderRadius:8,
        width:300,
        height:"70%",
        justifyContent:"center",
        alignItems:"center"
    }
});



