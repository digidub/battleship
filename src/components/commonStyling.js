import styled from 'styled-components';

export const Button = styled.button`
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 5px;
  border: 2px solid #494949;
  display: inline-block;
  transition: all 0.4s ease 0s;
  &:hover {
    color: #ffffff;
    background: #f6b93b;
    border-color: #f6b93b;
    transition: all 0.4s ease 0s;
    cursor: pointer;
  }
`;
