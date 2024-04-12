import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/campers">Campers</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </header>
  );
};
