import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import RecipesItem from '../../Elements/RecipesItem/RecipesItem';
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
        onMouseOver: (event) => handleOpenMoreIngredients(event, ingredients),
        onMouseOut: () => setIsPopupOpen(false)
      });
      return ingredientList;
    }
  }

  function handleOpenMoreIngredients(event, ingredients) {
    const {x, y} = event.nativeEvent;
    const popupIngredientsElement = document.querySelector('.popup-ingredients').querySelector('.popup__container');
    popupIngredientsElement.style.top = (y - 100) + 'px';
    popupIngredientsElement.style.left  = (x - 200) + 'px';

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
                  <RecipesItem recipe={recipe} getIngredientList={getIngredientList} key={recipe.id} />
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
