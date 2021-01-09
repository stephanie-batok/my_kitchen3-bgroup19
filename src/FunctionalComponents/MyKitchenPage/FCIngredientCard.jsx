import React from 'react';
import {Card} from 'react-bootstrap';

export default function FCIngredientCard(props) {
    const ingredient = props.ingredient;

    return (
        <div>
            <Card style={{ width: '12rem'}}>
              <Card.Img variant="top" src={ingredient.image} />
                <Card.Body>
                    <Card.Title>{ingredient.name}</Card.Title>
                    <Card.Text>
                    Calories: {ingredient.calories}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
