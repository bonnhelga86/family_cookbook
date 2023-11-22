import { ReactNode } from 'react';

export interface ICurrentUser {
  name: string,
  email: string
}

export interface IUserInputValue {
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

export interface ISystemMessage {
  message: string;
  type: 'success' | 'error' | null;
  messageClass: string;
}

export interface IPopup {
  popupName: string,
  isPopupOpen: boolean,
  children: ReactNode
}
