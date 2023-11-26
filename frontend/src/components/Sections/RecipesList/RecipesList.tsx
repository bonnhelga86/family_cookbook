import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import RecipesItem from '../../Elements/RecipesItem/RecipesItem';
import PopupIngredients from '../../Elements/PopupIngredients/PopupIngredients';
import PopupAddRecipe from '../../Elements/PopupAddRecipe/PopupAddRecipe';
import './RecipesList.scss';
import { recipesList } from '../../../utils/recipes';
import { IIngredientList, IRecipe } from '../../../utils/interfaceList';

function RecipesList({ isLoggedIn }: {isLoggedIn:boolean}) {
  const [isPopupIngredientOpen, setIsPopupIngredientOpen] = React.useState(false);
  const [ingredientList, setIngredientList] = React.useState<IIngredientList[]>([]);
  const [isPopupAddRecipeOpen, setIsPopupAddRecipeOpen] = React.useState(false);

  function getIngredientList(ingredients: IIngredientList[]): IIngredientList[] {
    if(ingredients.length <= 6) {
      return ingredients;
    } else {
      const ingredientList = ingredients.slice(0, 5);
      ingredientList.push({
        item: 'Ещё...',
        extraClass: 'more',
        onMouseOver: (event: React.MouseEvent<HTMLLIElement>) => handleOpenMoreIngredients(event, ingredients),
        onMouseOut: () => setIsPopupIngredientOpen(false)
      });
      return ingredientList;
    }
  }

  function handleOpenMoreIngredients(event: React.MouseEvent<HTMLLIElement>, ingredients: IIngredientList[]) {
    const {x, y} = event.nativeEvent;
    const popupIngredientsElement = document?.querySelector('.popup-ingredients')?.querySelector('.popup__container') as HTMLDivElement;
    popupIngredientsElement.style.top = (y - 100) + 'px';
    popupIngredientsElement.style.left  = (x - 200) + 'px';

    setIngredientList(ingredients);
    setIsPopupIngredientOpen(true);
  }

  return (
    <>
      <section className="recipes">
        <Container>

        {isLoggedIn
        &&  <Button
              onClick={() => setIsPopupAddRecipeOpen(true)}
              variant="danger"
              size="lg"
              className="recipes__button"
            >
              Добавить рецепт
            </Button>
        }

          <Stack direction="horizontal">
            <ul className="recipes__card-list">
              {recipesList.map((recipe: IRecipe) => {
                return (
                  <RecipesItem recipe={recipe} getIngredientList={getIngredientList} key={recipe.id} />
                )
              })}
            </ul>
          </Stack>
        </Container>
      </section>

      <PopupIngredients
        isPopupOpen={isPopupIngredientOpen}
        ingredientList={ingredientList}
      />

      <PopupAddRecipe
        isPopupOpen={isPopupAddRecipeOpen}
        setIsPopupOpen={setIsPopupAddRecipeOpen}
      />
    </>
  );
}

export default RecipesList;
