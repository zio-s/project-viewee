import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 50%;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
  }
`;



export const Container = styled.div`
  padding: 20px;
  color: #fff;
  background-color: background-color;
`;


export const TabMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  li {
    margin-right: 20px;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    &:hover {
        color: var(--hover-color);
      }

    &.active {
        color: var(--hover-color);
    }
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  background-color: #1c1c1e;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
`;

export const PlayButton = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-50);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Description = styled.p`
  margin-top: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: var(--primary-50);
`;
