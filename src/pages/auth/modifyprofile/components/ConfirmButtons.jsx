import React from 'react';
import Button from '../../../../ui/button/defaultButton';
import { useNavigate } from 'react-router';

const ConfirmButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="confirmBox">
      <Button size="large" fullWidth={true} variant="gray" type="button" onClick={() => navigate(-1)}>
        취소
      </Button>
      <Button size="large" fullWidth={true} type="submit">
        확인
      </Button>
    </div>
  );
};

export default ConfirmButtons;
