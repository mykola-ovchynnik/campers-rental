import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  themeSelector,
  toggleTheme,
} from '../../store/themeReducer/themeSlice';
import {
  MoonIcon,
  Slider,
  SunIcon,
  ThemeInput,
  ThemeToggleButton,
} from './ThemeToggle.styled';
import { ReactComponent as Sun } from '../../icons/theme/sun.svg';
import { ReactComponent as Moon } from '../../icons/theme/moon.svg';

const ThemeToggle = () => {
  const darkMode = useSelector(themeSelector);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleButton onClick={handleToggle}>
      <SunIcon>
        <Sun />
      </SunIcon>
      <MoonIcon>
        <Moon />
      </MoonIcon>
      <ThemeInput type="checkbox" checked={darkMode === true} readOnly />
      <Slider></Slider>
    </ThemeToggleButton>
  );
};

export default ThemeToggle;
