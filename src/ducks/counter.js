//types

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";


//action builders

export function increment(num){
    return{
        type: INCREMENT,
        num: num
        //or just num 
    }
}

export function decrement(num){
    return{
        type: DECREMENT,
        num
    }
}


export function undo(){
    return{
        type: UNDO,
        
    }


}

export function redo(){
    return{
        type: REDO,
        
    }

}




let initialState = {
    value: 0
}
//reducer

export default function reducer(state = initialState, action){
    //this is what state = inititial state is doing
    // if(state == null || state == undefined){
    //     state = initialState;
    // }

    switch(action.type){
        case INCREMENT:
        let newVal = action.num + state.value;
        return Object.assign({}, state, {value: newVal})

        case DECREMENT:
        let newValue = state.value - action.num;
        return Object.assign({}, state, {value: newValue} )
    }

    return state;

}