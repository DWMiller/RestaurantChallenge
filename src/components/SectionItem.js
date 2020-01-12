import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getImagePath, urlFormat } from '../utils/text';
import { IconSend } from './icons';

const Container = styled.div``;

function Item(props) {
  const item = useSelector(state => state.sections.byId[props._ref]);

  const imgSrc = getImagePath(item.image.asset._ref);

  return (
    <Container className={'listItem' + props.className}>
      <Link to={`/${urlFormat(item.name.en)}`}>
        <div className="listItem_imageContainer">
          <img width="100px" src={imgSrc} alt="" />
        </div>
        <div className="listItem_content">
          <div className="iconWrapper">
            <IconSend />
          </div>
          <div className="listItem_label">{item.name.en}</div>
        </div>
      </Link>
    </Container>
  );
}

Item.defaultProps = {
  className: ''
};

export default Item;
