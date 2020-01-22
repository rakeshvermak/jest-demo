import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

export default class Test extends Component {
constructor(){
    super()
    this.state={
        user:[{"id":1,"email":"george.bluth@reqres.inn","first_name":"Georgea","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},
        {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},
        {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},
        {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
        {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
        {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}]
    }
}

    render() {
        const{user}=this.state;
        return (
            <div>
               {
               user.map((data)=>{
                  
                    if(data.email==='george.bluth@reqres.in' && data.first_name==='George')
                    return <Button variant="primary">first condition </Button> 
                else if(data.email==='charles.morris@reqres.in' && data.first_name==='Charles')
                      return <Button variant="success">second condition</Button>
                     else return null                   
                
            })
               }
            </div>
        )
    }
}