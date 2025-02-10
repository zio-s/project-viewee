import styled from 'styled-components';

export const CateGoryBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 270px);
  gap: 20px;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
export const CateGoryItem = styled.li`
  img {
    width: 270px;
    height: 386px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }
`;
