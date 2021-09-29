import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 1;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 50px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
