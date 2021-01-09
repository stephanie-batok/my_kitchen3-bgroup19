import React,{useState} from 'react';
import {Button,Card,CardColumns,Modal} from 'react-bootstrap';
import FCIngredientCard from './FCIngredientCard';


export default function FCRecipeCard(props) {

    const recipe = props.recipe;

    //Show and Close Modal:
    const [show, setShow] =  useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Map ingredients into cards:
    const ingredients= recipe.ingredients.map((ing,key)=>
        <FCIngredientCard key={key} ingredient={ing}/>
    );
  
    return (
        <div>
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>
                    {recipe.cookingMethod}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>Show Ingredients</Button>
                </Card.Body>
            </Card>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Ingredients </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardColumns>
                      {ingredients}
                    </CardColumns> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>       
        </div>
    )
}
