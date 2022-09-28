A principal vantagem de se utilizar o useReducer é que podemos gerenciar varios estados. Dessa forma o codigo fica mais organizado e mais facil de entender.

O useReducer tem a seguinte estrutura:

    function reducer(state, action){
        ...
    }
    ...App(){
        const [state, dispath] = useReducer(reducer, initialState)

        return (...)
    }...

- Um detalhe a se observar é que dentro da action existe varias propriedades, sendo uma delas bem interessante a actions.payload onde podemos passar informações que queromos.