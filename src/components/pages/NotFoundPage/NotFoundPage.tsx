
import { FC } from 'react';
import css from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className={css.component}>
      <span>404</span>
      <h1>Страница не найдена</h1>
    </div>
  );
};
