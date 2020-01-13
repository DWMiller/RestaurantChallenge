import React from 'react';
import { useSelector } from 'react-redux';

import { ItemsList } from '../components/styles/Items';

import Item from '../components/SectionItem';

function Main() {
  const menu = useSelector(state => state.menu);

  return (
    <div>
      <ItemsList>
        {menu.options.map(item => (
          <Item key={item._key} {...item} />
        ))}
      </ItemsList>
    </div>
  );
}

export default Main;
