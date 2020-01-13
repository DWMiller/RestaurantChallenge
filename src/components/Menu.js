import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const MenuContainer = styled.nav`
  background: ${props => props.theme.palette['yellow-vivid-900']};
  overflow-x: auto;
  text-align: center;
  padding: ${props => props.theme.layout['spacing-small']} 0;

  .menu_inner {
    white-space: nowrap;
  }
`;

function Menu() {
  const menu = useSelector(state => state.menu);

  return (
    <MenuContainer>
      <div className="menu_inner">
        {menu.options.map(item => (
          <MenuItem key={item._key} {...item} />
        ))}
      </div>
    </MenuContainer>
  );
}

export default Menu;
