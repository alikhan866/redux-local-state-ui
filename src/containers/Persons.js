import React, { Component } from 'react';
import { connect } from 'react-redux'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'
import person from '../components/Person/Person';
class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {console.log(this.props.persons)}
                {this.props.persons.map(person => (
                    <Person
                        key={person.value.id}
                        name={person.value.name}
                        age={person.value.age}
                        clicked={() => this.props.onPersonRemoved(person.value.id)}/>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        persons:state.persons
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded : (name,age) => dispatch({
            type: actionTypes.ADD_PERSON,
            personData:{
                name:name,
                age:age
            }
        }),

        onPersonRemoved : (id) => dispatch({
            type: actionTypes.DELETE_PERSON,
            personId : id
        })

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Persons);