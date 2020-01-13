import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { urlFormat, getImagePath } from '../utils/text';
import { pulseAnimation } from '../styles/animations';

const Container = styled(NavLink)`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  color: ${props => props.theme.palette['yellow-vivid-050']};
  display: inline-block;
  margin: 0 ${props => props.theme.layout['spacing-small']};

  .imageContainer img {
    height: 75px;
  }

  .sectionLabel {
    position: relative;
  }

  .sectionLabel::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    right: 50%;
    border-bottom: 2px solid ${props => props.theme.palette['yellow-vivid-300']};
    transition: all 0.3s ease 0s;
  }

  &:focus {
    outline: none;
  }

  &.active,
  &:hover {
    .sectionLabel::after {
      left: 0px;
      right: 0px;
    }
  }

  &:hover:not(.active) img,
  &:focus:not(.active) img {
    animation: ${pulseAnimation} 0.4s ease infinite alternate;
  }
`;

function MenuItem({ _key, _ref, _type }) {
  const section = useSelector(state => state.sections.byId[_ref]);

  const imgSrc = getImagePath(section.carouselImage.asset._ref);

  return (
    <Container to={`/${urlFormat(section.name.en)}`}>
      <div className="imageContainer">
        <img src={imgSrc} alt="" />
      </div>
      <div className="sectionLabel">{section.name.en}</div>
    </Container>
  );
}

export default MenuItem;
