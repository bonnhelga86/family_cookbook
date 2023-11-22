import React from 'react';
import Card from 'react-bootstrap/Card';
import { IRecipe } from '../../../utils/interfaceList';

function RecipesItem(
  { recipe, getIngredientList }: { recipe: IRecipe, getIngredientList: Function }
) {
  return (
    <li className="recipes__card-item">
      <Card bg="light" text="dark" className="recipes__card">
        <Card.Header className="recipes__title"> {recipe.title} </Card.Header>
        <Card.Body className="recipes__body">
          <Card.Title className="recipes__ingredient-title"> Состав </Card.Title>
          <ul className="recipes__ingredient-list">
            {getIngredientList(recipe.ingredients).map((
              {item, extraClass, ...props}: {item: string, extraClass: string}
            ) => {
              return(
                <li
                  key={`${recipe.id}_${item}`}
                  className={`recipes__ingredient-item ${extraClass ? 'recipes__ingredient-'+extraClass : ''}`}
                  {...props}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </Card.Body>
      </Card>
    </li>
  );
}

export default RecipesItem;
