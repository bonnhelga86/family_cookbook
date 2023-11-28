import TabMain from "../components/Elements/Tabs/TabMain/TabMain";
import TabIngredients from "../components/Elements/Tabs/TabIngredients/TabIngredients";
import TabSteps from "../components/Elements/Tabs/TabSteps/TabSteps";
import TabSave from "../components/Elements/Tabs/TabSave/TabSave";

export const tabList = [
  {
    title:'Описание',
    content: <TabMain />
  },
  {
    title:'Ингредиенты',
    content: <TabIngredients />
  },
  {
    title:'Приготовление',
    content: <TabSteps />
  },
  {
    title:'Сохранение',
    content: <TabSave />
  }
];
