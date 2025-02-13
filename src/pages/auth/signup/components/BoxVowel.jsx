import React from 'react';
import { CheckItem, RequestBox, VowelWrap } from '../style';
import CheckBox from '../../../../ui/checkbox';
const BoxVowel = () => {
  return (
    <VowelWrap>
      <CheckItem>
        <div className="iconBox">
          <CheckBox size="small" id="AgreeAll" name="AgreeAll" />
        </div>
        <label htmlFor="AgreeAll">[필수] 만 14세 이상입니다.</label>
      </CheckItem>
      <CheckItem>
        <div className="iconBox">
          <CheckBox size="small" id="AgreeAll" name="AgreeAll" />
        </div>
        <label htmlFor="AgreeAll">[필수] 만 14세 이상입니다.</label>
      </CheckItem>
      <CheckItem>
        <div className="iconBox">
          <CheckBox size="small" id="AgreeAll" name="AgreeAll" />
        </div>
        <label htmlFor="AgreeAll">[필수] 만 14세 이상입니다.</label>
      </CheckItem>
      <CheckItem>
        <div className="iconBox">
          <CheckBox size="small" id="AgreeAll" name="AgreeAll" />
        </div>
        <label htmlFor="AgreeAll">[선택] 개인정보 수집 동의</label>
      </CheckItem>
      <CheckItem>
        <div className="iconBox">
          <CheckBox size="small" id="AgreeAll" name="AgreeAll" />
        </div>
        <label htmlFor="AgreeAll">[선택] 개인정보 수집 동의</label>
      </CheckItem>
    </VowelWrap>
  );
};

export default BoxVowel;
