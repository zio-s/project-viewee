import React from 'react';
import Button from '../../../../ui/button/defaultButton';

const ConfirmButtons = () => (
  <div className="confirmBox">
    <Button size="large" fullWidth={true} variant="gray">
      취소
    </Button>
    <Button size="large" fullWidth={true}>
      확인
    </Button>
  </div>
);

export default ConfirmButtons;
