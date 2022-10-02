import React, { useReducer } from "react";
import { useForm } from 'react-hook-form';

const initialState = {
    tasksOrigin: [], //tasks originais
    listTasks: [] //tasks que seram mostradas na tela
}

const compare = (a,b) => {
    if(a.name[0].toUpperCase() > b.name[0].toUpperCase()) return 1;
    if(a.name[0].toUpperCase() < b.name[0].toUpperCase()) return -1;
    return 0;
};

const reducer = (state, action) => {
    // console.log('type', action.type, '\npayload ', action.payload);
    const actions = {
        "add": {
            tasksOrigin: [
                ...state.tasksOrigin, 
                {name: action.payload.name, checked: action.payload.checked}
            ]},
        "remove": {
            tasksOrigin: state.tasksOrigin.filter((item, i) => i != action.payload)
        },
        "filter_cres": {
            tasksOrigin: state.tasksOrigin.sort((a, b) => compare(a, b)),
        },
    };

    return actions[action.type] || state;
}

let render = 0;
const Todo = () => {
    const { register, handleSubmit } = useForm({shouldUseNativeValidation: true});
    const [tasks, dispatch] = useReducer(reducer, initialState);

    const handleOnSubmit = data => {
       dispatch({
            type: "add",
            payload: {name: data.newTask, checked: false}
        });
    }

    render++;

    return (
        <>
            <h2>Render: {render}</h2>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input {...register('newTask', {required: "Preencha corretamente!"})} />
                <input type="submit"/>
            </form>
            <ul>
                {
                    (tasks.tasksOrigin).map((task, i) => (
                        <li key={i}>{task.name}
                            <button onClick={() => dispatch({type: 'remove', payload: i})}>X</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => dispatch({type: 'filter_cres', payload: {name: null}})}>Filter cres</button>
        </>
    );
};

export default Todo;