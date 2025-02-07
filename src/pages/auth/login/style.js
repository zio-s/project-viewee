import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const LogoSection = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: #1c1c1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const InfoBox = styled.div`
  margin-bottom: 30px;
  padding: 0px 75px;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
`;
