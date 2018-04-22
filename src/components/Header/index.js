import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to='/'>Главная</Link>
    <Link to='/signup'>Зарегистрироваться</Link>
    <Link to='/signin'>Войти</Link>
    <Link to='/signout'>Выйти</Link>
    <Link to="/profile">Профиль</Link>
  </div>
);

export default Header