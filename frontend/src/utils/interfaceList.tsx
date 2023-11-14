export interface ICurrentUser {
  name: string,
  email: string,
}

export interface IInputValue {
  name?: string,
  email: string,
  password?: string,
  repeat_password?: string
}

export interface IIngredientList {
  item: string,
  extraClass?: string,
  onMouseOver?: Function,
  onMouseOut?: Function
}

export interface IRecipe {
  id: number;
  title: string;
  ingredients: IIngredientList[];
}


