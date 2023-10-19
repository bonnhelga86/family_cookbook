import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import PopupIngredients from '../PopupIngredients/PopupIngredients';
import './RecipesList.scss';
import { recipesList } from '../../../utils/recipes';

function RecipesList() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [ingredientList, setIngredientList] = React.useState([]);

  function getIngredientList(ingredients) {
    if(ingredients.length <= 6) {
      return ingredients;
    } else {
      const ingredientList = ingredients.slice(0, 5);
      ingredientList.push({
        item: 'Ещё...',
        extraClass: 'more',
        onMouseOver: () => handleOpenMoreIngredients(ingredients),
        onMouseOut: () => setIsPopupOpen(false)
      });
      return ingredientList;
    }
  }

  function handleOpenMoreIngredients(ingredients) {
    console.log('ingredients', ingredients);
    setIngredientList(ingredients);
    setIsPopupOpen(true);
  }

  return (
    <>
      <section className="recipes">
        <Container>
          <Stack direction="horizontal">
            <ul className="recipes__card-list">
              {recipesList.map(recipe => {
                return (
                  <li className="recipes__card-item" key={recipe.id}>
                    <Card bg="light" text="dark" className="recipes__card">
                      <Card.Header className="recipes__title"> {recipe.title} </Card.Header>
                      <Card.Body className="recipes__body">
                        <Card.Title className="recipes__ingredient-title"> Состав </Card.Title>
                        <ul className="recipes__ingredient-list">
                          {getIngredientList(recipe.ingredients).map(({item, extraClass, ...props}) => {
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
                )
              })}
            </ul>


          </Stack>
        </Container>
      </section>

      <PopupIngredients
        isPopupOpen={isPopupOpen}
        ingredientList={ingredientList}
      />
    </>
  );
}

export default RecipesList;
