import { Link } from 'react-router';
import styled from 'styled-components';

export const NavItem = styled.li`
  position: relative;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #333;
    transition: color 0.2s ease;

    &:hover {
      color: #000;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 8px;
  width: 200px;
  background: #2b2a2a;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

export const ProfileSection = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-70);
  display: flex;
  justify-content: space-between;
`;

export const ProfileTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ProfileSubtitle = styled(Link)`
  color: #fff;
  margin-top: 2px;
  font-size: 1.2rem !important;
  cursor: pointer;
  &:hover {
    color: var(--hover-color);
  }
`;

export const MenuItem = styled(Link)`
  display: block;
  padding: 12px 16px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--gray-80);
  }
`;

export const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid var(--gray-70);
  margin: 4px 0;
`;

export const LoginLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: var(--gray-30);
  }
`;
