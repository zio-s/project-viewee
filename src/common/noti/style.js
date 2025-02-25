import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../styled/Mixin';

export const NotificationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const BellButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-0);
  transition: all 0.2s ease;

  ${mobileMore`
    width: 36px;
    height: 36px;
  `}

  ${tabletMore`
    width: 40px;
    height: 40px;
  `}

  &:hover {
    color: var(--primary-50);
  }

  &:focus {
    outline: none;
  }
`;

export const BellBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--primary-50);
  color: white;
  border-radius: 50%;
  min-width: 14px;
  height: 14px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobileMore`
    min-width: 16px;
    height: 16px;
    font-size: 11px;
  `}

  ${tabletMore`
    min-width: 18px;
    height: 18px;
    font-size: 12px;
  `}
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: -80px;
  width: 280px;
  max-height: 400px;
  background-color: var(--gray-80);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  overflow: hidden;
  margin-top: 10px;
  border: 1px solid var(--border-color);

  ${mobileMore`
    right: -40px;
    width: 300px;
    max-height: 450px;
  `}

  ${tabletMore`
    right: 0;
    width: 320px;
    max-height: 500px;
  `}
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border-color);

  ${mobileMore`
    padding: 12px 14px;
  `}

  ${tabletMore`
    padding: 12px 16px;
  `}
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: var(--font-weight-semibold);
  color: var(--gray-0);

  ${mobileMore`
    font-size: 15px;
  `}

  ${tabletMore`
    font-size: 16px;
  `}
`;

export const MarkAllReadButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-40);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${mobileMore`
    font-size: 13px;
  `}

  ${tabletMore`
    font-size: 14px;
  `}

  &:hover {
    color: var(--primary-30);
  }
`;

export const NotificationList = styled.div`
  max-height: 300px;
  overflow-y: auto;

  ${mobileMore`
    max-height: 350px;
  `}

  ${tabletMore`
    max-height: 400px;
  `}

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-70);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-50);
    border-radius: 3px;
  }
`;

export const EmptyNotification = styled.div`
  padding: 16px;
  text-align: center;
  color: var(--gray-40);
  font-size: 13px;

  ${mobileMore`
    padding: 18px;
    font-size: 14px;
  `}

  ${tabletMore`
    padding: 20px;
  `}
`;

export const NotificationItem = styled.div`
  padding: 10px 12px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => (props.unread ? 'var(--gray-70)' : 'var(--gray-80)')};
  transition: background-color 0.2s ease;

  ${mobileMore`
    padding: 12px 14px;
  `}

  ${tabletMore`
    padding: 12px 16px;
  `}

  &:hover {
    background-color: ${(props) => (props.unread ? 'var(--gray-60)' : 'var(--gray-70)')};
  }
`;

export const NotificationIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.type) {
      case 'liked':
        return 'rgba(240, 90, 126, 0.2)'; // primary-50 with opacity
      case 'download':
        return 'rgba(255, 208, 52, 0.2)'; // secondary-50 with opacity
      case 'review':
        return 'rgba(146, 146, 146, 0.2)'; // gray-50 with opacity
      case 'couponIssued':
        return 'rgba(255, 218, 94, 0.2)'; // secondary-40 with opacity
      default:
        return 'rgba(80, 80, 80, 0.3)'; // gray-70 with opacity
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => {
    switch (props.type) {
      case 'liked':
        return 'var(--primary-50)';
      case 'download':
        return 'var(--secondary-50)';
      case 'review':
        return 'var(--gray-40)';
      case 'couponIssued':
        return 'var(--secondary-40)';
      default:
        return 'var(--gray-50)';
    }
  }};
  flex-shrink: 0;

  ${mobileMore`
    width: 30px;
    height: 30px;
  `}

  ${tabletMore`
    width: 32px;
    height: 32px;
  `}
`;

export const ContentWrapper = styled.div`
  margin-left: 10px;
  flex-grow: 1;
  cursor: pointer;

  ${mobileMore`
    margin-left: 12px;
  `}
`;

export const NotificationMessage = styled.p`
  margin: 0 0 3px;
  font-size: 12px;
  color: var(--gray-10);
  word-break: break-word;

  ${mobileMore`
    font-size: 13px;
    margin: 0 0 4px;
  `}

  ${tabletMore`
    font-size: 14px;
  `}
`;

export const NotificationTime = styled.p`
  margin: 0;
  font-size: 10px;
  color: var(--gray-50);

  ${mobileMore`
    font-size: 11px;
  `}

  ${tabletMore`
    font-size: 12px;
  `}
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: var(--gray-60);
  margin-left: 6px;
  cursor: pointer;
  flex-shrink: 0;
  transition: color 0.2s ease;
  font-size: 14px;

  ${mobileMore`
    margin-left: 8px;
    font-size: 16px;
  `}

  &:hover {
    color: var(--primary-50);
  }
`;

export const DropdownFooter = styled.div`
  padding: 10px;
  text-align: center;
  border-top: 1px solid var(--border-color);

  ${mobileMore`
    padding: 12px;
  `}
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-40);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.2s ease;

  ${mobileMore`
    font-size: 13px;
  `}

  ${tabletMore`
    font-size: 14px;
  `}

  &:hover {
    color: var(--primary-30);
  }
`;
