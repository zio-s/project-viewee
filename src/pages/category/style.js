import styled from 'styled-components';

export const CateGoryWrap = styled.div`
  width: var(--layout);
  margin: 0 auto;
  > div {
    padding: 60px 0;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: var(--font-title-s);
    margin-right: 20px;
  }
`;
export const FilterBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 15px;
  background-color: var(--gray-60);
  > div {
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
