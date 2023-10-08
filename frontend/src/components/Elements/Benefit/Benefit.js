import React from 'react';
import './Benefit.scss';

function Benefit() {

  return (
    <ul className="benefit">
      <li className="benefit__item">
        <div className="benefit__icon-wrap">
          <div className="benefit__icon benefit__icon_type_cookbook"></div>
        </div>
        <div className="benefit__content-wrap">
          <h2 className="benefit__title">Создавать свою книгу рецептов</h2>
          <p className="benefit__text">
            Добавляйте рецепты в Избранное и наполняйте свою собственную книгу рецептов.
          </p>
        </div>
      </li>
      <li className="benefit__item">
        <div className="benefit__icon-wrap">
          <div className="benefit__icon benefit__icon_type_calendar"></div>
        </div>
        <div className="benefit__content-wrap">
          <h2 className="benefit__title">Планировать меню</h2>
          <p className="benefit__text">
            Больше не придется думать, что приготовить!
            Используя имеющиеся рецепты Вы можете запланировать меню вперед.
          </p>
        </div>
      </li>
      <li className="benefit__item">
        <div className="benefit__icon-wrap">
         <div className="benefit__icon benefit__icon_type_list"></div>
        </div>
        <div className="benefit__content-wrap">
          <h2 className="benefit__title">Составлять список покупок</h2>
          <p className="benefit__text">
            После составления меню у Вас автоматически сформируется список необходимы продуктов.
          </p>
        </div>
      </li>
      <li className="benefit__item">
        <div className="benefit__icon-wrap">
         <div className="benefit__icon benefit__icon_type_comment"></div>
        </div>
        <div className="benefit__content-wrap">
          <h2 className="benefit__title">Комментировать рецепты</h2>
          <p className="benefit__text">
            Если Вы знаете как улучшить рецепт или захотите поделиться радостью от приготовления,
            смело оставляйте комментарии!
          </p>
        </div>
      </li>
    </ul>
  );
}

export default Benefit;
