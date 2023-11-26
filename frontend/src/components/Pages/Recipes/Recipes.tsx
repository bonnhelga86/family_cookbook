import RecipesList from '../../Sections/RecipesList/RecipesList';
import Search from '../../Sections/Search/Search';

function Recipes({ isLoggedIn }: {isLoggedIn: boolean}) {
  return (
    <>
      <Search />
      <RecipesList isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Recipes;
