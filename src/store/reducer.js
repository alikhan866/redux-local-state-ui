import * as actionType from './actions'
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case (actionType.ADD_PERSON) :
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons:state.persons.concat({key:newPerson.id,value:newPerson})
            }
        case(actionType.DELETE_PERSON) :
            return {
                ...state,
                persons:state.persons.filter(person => person.value.id !== action.personId)
            }
    }

    return state
}

export default reducer