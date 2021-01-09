import React, { Component } from 'react'
import FCRecipes from '../FunctionalComponents/MyKitchenPage/FCRecipes';


export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          recipes:[]
         };
    }   
    componentDidMount = () => {
      let apiUrl= this.props.apiUrl + "recipes/";

        fetch(apiUrl,                             //Get all recipes from db
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
                console.log("fetch recipes= ", result);
                this.setState({recipes:result});
              },
              (error) => {
                console.log("err post=", error);
              });
      
    }
    render() {
        return (
            <div>
              <h1>Recipes</h1>
                <FCRecipes recipeList={this.state.recipes}/>
            </div>
        )
    }
}
