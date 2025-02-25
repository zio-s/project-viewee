import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const BellButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export const BellBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e53e3e;
  color: white;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  max-height: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
  margin-top: 10px;
  border: 1px solid #e2e8f0;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const MarkAllReadButton = styled.button`
  background: none;
  border: none;
  color: #3182ce;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const NotificationList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const EmptyNotification = styled.div`
  padding: 20px;
  text-align: center;
  color: #718096;
`;

export const NotificationItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: flex-start;
  background-color: ${(props) => (props.unread ? '#EBF8FF' : 'white')};

  &:hover {
    background-color: ${(props) => (props.unread ? '#BEE3F8' : '#F7FAFC')};
  }
`;

export const NotificationIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.type) {
      case 'favorite':
        return '#FEF3C7';
      case 'update':
        return '#E0F2FE';
      case 'review':
        return '#E9D8FD';
      case 'coupon':
        return '#D1FAE5';
      default:
        return '#E2E8F0';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => {
    switch (props.type) {
      case 'favorite':
        return '#D97706';
      case 'update':
        return '#0284C7';
      case 'review':
        return '#7E22CE';
      case 'coupon':
        return '#059669';
      default:
        return '#4A5568';
    }
  }};
  flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
  margin-left: 12px;
  flex-grow: 1;
  cursor: pointer;
`;

export const NotificationMessage = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  color: #1a202c;
`;

export const NotificationTime = styled.p`
  margin: 0;
  font-size: 12px;
  color: #718096;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #a0aec0;
  margin-left: 8px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: #4a5568;
  }
`;

export const DropdownFooter = styled.div`
  padding: 12px;
  text-align: center;
  border-top: 1px solid #e2e8f0;
`;

export const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #3182ce;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
