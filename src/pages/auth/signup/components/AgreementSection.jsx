import React from 'react';
import { RequestBox } from '../style';
import CheckBox from '../../../../ui/checkbox';

const AgreementSection = ({ handleCheckedAll, allChecked }) => {
  return (
    <RequestBox>
      <div className="iconBox">
        <CheckBox size="small" id="AgreeAll" name="AgreeAll" onChange={handleCheckedAll} checked={allChecked} />
      </div>
      <label htmlFor="AgreeAll">모두 확인하였으며 동의합니다</label>
    </RequestBox>
  );
};

export default AgreementSection;
