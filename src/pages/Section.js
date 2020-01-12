import React from 'react';
import { useSelector } from 'react-redux';
import { parseUrl } from '../utils/text';

import { ItemsList } from '../components/styles/Items';

import Item from '../components/Item';

function Section(props) {
  const sectionId = parseUrl(props.match.params.sectionId);

  const section = useSelector(
    state => state.menu && state.sections.byName[sectionId]
  );

  if (!section) {
    return null;
  }

  return (
    <div>
      <ItemsList>
        {section.options.map(item => (
          <Item key={item._key} {...item} />
        ))}
      </ItemsList>
    </div>
  );
}

export default Section;
