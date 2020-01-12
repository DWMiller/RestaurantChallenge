import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getImagePath } from '../utils/text';

const Container = styled.div``;

function Item(props) {
  const item = useSelector(state => state.items.byId[props._ref]);

  const imgSrc = getImagePath(item.image.asset._ref);

  return (
    <Container className={'listItem' + props.className}>
      <div className="listItem_imageContainer">
        <img width="100px" src={imgSrc} alt="" />
      </div>
      <div className="listItem_content">
        <div className="listItem_label">{item.name.en}</div>
      </div>
    </Container>
  );
}

Item.defaultProps = {
  className: ''
};

export default Item;
