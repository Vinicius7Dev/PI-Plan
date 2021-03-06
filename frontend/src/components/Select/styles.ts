import styled from 'styled-components';

interface IContainerProps {
  inError: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  width: 100%;
  height: 65px;
  margin: 20px 0 30px;

  label {
    position: absolute;
    top: -18px;
    left: 12px;

    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.inError ? '#FF3300' : '#CEAA7B'};
    font-weight: bold;

    background-color: white;
    padding: 5px;
  }

  border: 2px solid ${props => props.inError ? '#FF3300' : '#CEAA7B'};
  border-radius: 15px;
  padding: 10px;

  select {
    height: 100%;
    width: 100%;

    border: none;
    font-size: 18px;
  }

  span {
    display: block;
    margin-top: 16px;
    text-align: right;
    color: #FF3300;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
