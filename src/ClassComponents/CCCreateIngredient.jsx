import React, { Component } from 'react';
import {Form,Button,Container} from 'react-bootstrap';


export default class CCCreateIngredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            image:"",
            calories:""
        };
    }   

    CreateIngredient=()=>{
        if(this.CheckIfFull()){

        let apiUrl= this.props.apiUrl + "ingredients/";

        let newIngredient =                              //create object to send in the body of POST method
        {
          "name": this.state.name,
          "image": this.state.image,
          "calories": this.state.calories
        };
    
        fetch(apiUrl,                                    //add new ingredient to db with POST method
          {
            method: 'POST',
            body: JSON.stringify(newIngredient),
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json; charset=UTF-8',
            })
          })
          .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
          })
          .then(
            (result) => {
              console.log("fetch btnFetchCreateIngredient= ", result);
              alert(this.state.name + " was added to the ingredients!");
              this.ClearForm();
            },
            (error) => {
              console.log("err post=", error);
            });        
        }
        else{
            alert("Please fill the missing details");
        }
    }

    ClearForm=()=>{                              //when you click on 'Clear' btn - clean form
        this.setState({
            name:"",
            image:"",
            calories:""
        });
    }
    CheckIfFull=()=>{
        if(this.state.name!=="" && this.state.image!=="" && this.state.calories!==""){
            return true;
        }
        return false;
    }
    render() {
        return (
                <Container>
                    <h1>New ingredient</h1>
                    <br/>
                    <Form>
                        <Form.Group>
                            <Form.Label>Ingredient Name</Form.Label>
                            <Form.Control onChange={(e)=>(this.setState({name:e.target.value}))} value={this.state.name} type="text"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ingredient Image</Form.Label>
                            <Form.Control onChange={(e)=>(this.setState({image:e.target.value}))} value={this.state.image} type="text"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ingredient Calories</Form.Label>
                            <Form.Control onChange={(e)=>(this.setState({calories:e.target.value}))} value={this.state.calories} type="number"/>
                        </Form.Group>

                        <Button variant="primary" onClick={this.CreateIngredient}>Create Ingredient</Button> &nbsp;&nbsp;&nbsp;
                        <Button variant="danger" onClick={this.ClearForm}>Clear</Button>

                    </Form>
                </Container>
        )
    }
}


