import RecipesList from '../../Sections/RecipesList/RecipesList';
import Search from '../../Sections/Search/Search';

function Recipes({ isLoggedIn }) {
  return (
    <>
      <Search />
      <RecipesList />
    </>
  );
}

export default Recipes;
