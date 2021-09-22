import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: none rgba(255, 255, 255, 0.2);
  padding: 8px;
  border: none;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.4s ease 0s;
  &:hover {
    background: none rgba(255, 255, 255, 0.4);
    transition: all 0.4s ease 0s;
    cursor: pointer;
  }
`;
