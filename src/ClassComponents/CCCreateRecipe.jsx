import React, { Component } from 'react';
import {Form,Button,Container} from 'react-bootstrap';
import FCIngredients from '../FunctionalComponents/CreateRecipePage/FCIngredients';


export default class CCCreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            cookingMethod:"",
            image:"",
            time:"",
            ingredientList:[], //        all ingredients
            ingredients:[]     //        ingredients for recipe
        };
    }
    componentDidMount=()=>{
        let apiUrl= this.props.apiUrl + "ingredients/";

        fetch(apiUrl,          //Get all ingredients from db
            {
              method: 'GET',
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
                console.log("fetch ingredients= ", result);
                this.setState({ingredientList:result});      //update state with the ingredients
              },
              (error) => {
                console.log("err post=", error);
              });
    }

    addIngredient=(data)=>{                                  //add ingredient to ingredients when the box is checked
        let temp=[...this.state.ingredients,data];
        this.setState({ingredients:temp});
    }

    removeIngredient=(data)=>{                               //remove ingredient from ingredients when the box is unchecked
        let temp=this.state.ingredients.filter(ing=>ing.id!==data.id);
        this.setState({ingredients:temp});
    }

    CreateRecipe=()=>{                                      //when you click on 'Create Recipe' btn
        if(this.CheckIfFull()){
            let apiUrl= this.props.apiUrl + "recipes/";

            let newRecipe={                                  //create object to send in the body of POST method
                "name": this.state.name,
                "cookingMethod": this.state.cookingMethod,
                "image": this.state.image,
                "time": this.state.time,
                "ingredients": this.state.ingredients,
            }

            fetch(apiUrl,                                    //add new recipe to db with POST method
              {
                method: 'POST',
                body: JSON.stringify(newRecipe),
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
                  console.log("fetch btnFetchCreateRecipe= ", result);
                  alert(this.state.name + " was added to the Recipes!");
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
            cookingMethod:"",
            image:"",
            time:"",
            ingredients:[]
        });

    }

    CheckIfFull=()=>{                           //check if all recipe details are full
        if(this.state.name!=="" && this.state.image!=="" && this.state.cookingMethod!=="" && this.state.time!==""){
            return true;
        }
        return false;
    }

    render() {
        return (
            <Container>
            <h1>New Recipe</h1>
            <br/>
            <Form>
                <Form.Group>
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control onChange={(e)=>(this.setState({name:e.target.value}))} value={this.state.name} type="text"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Cooking Method</Form.Label>
                    <Form.Control onChange={(e)=>(this.setState({cookingMethod:e.target.value}))} value={this.state.cookingMethod} type="text"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Recipe Image</Form.Label>
                    <Form.Control onChange={(e)=>(this.setState({image:e.target.value}))} value={this.state.image} type="text"/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Time</Form.Label>
                    <Form.Control onChange={(e)=>(this.setState({time:e.target.value}))} value={this.state.time} type="number"/>
                </Form.Group>

                <FCIngredients ingredientList={this.state.ingredientList} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} />

                <Button variant="primary" onClick={this.CreateRecipe}>Create Recipe</Button> &nbsp;&nbsp;&nbsp;
                <Button variant="danger" onClick={this.ClearForm}>Clear</Button>
            </Form>
        </Container>
        )
    }
}
