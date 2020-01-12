import styled from 'styled-components';
import { pulseAnimation } from '../../styles/animations';

export const ItemsList = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(250px, max-content));

  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  margin: 0 auto;

  .listItem {
    box-shadow: ${props => props.theme.shadows['shadow-200']};
    text-align: center;
  }

  .listItem:hover,
  .listItem a:focus {
    .icon-send {
      animation: ${pulseAnimation} 0.4s ease infinite alternate;
    }
  }

  .listItem_content {
    position: relative;
  }

  .iconWrapper {
    transform: rotate(90deg);
    position: absolute;
    right: 5px;
    top: calc(50% - 15px);
    height: 30px;
  }

  .icon-send {
    height: 100%;
  }

  .listItem_label {
    max-width: 70%;
    margin: auto;
  }

  .listItem_imageContainer {
    height: 240px;

    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
  }

  .listItem_label {
    padding: ${props => props.theme.layout['spacing-medium']} 0;
    font-size: ${props => props.theme.typeScale.large};
    color: ${props => props.theme.palette['yellow-vivid-800']};
    font-weight: bold;
  }
`;
