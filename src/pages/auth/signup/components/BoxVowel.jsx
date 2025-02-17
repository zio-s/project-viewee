import React from 'react';
import { CheckItem, RequestBox, VowelWrap } from '../style';
import CheckBox from '../../../../ui/checkbox';
const BoxVowel = ({ itemChecked, handleCheckedItem }) => {
  return (
    <VowelWrap>
      {itemChecked.map((item) => (
        <CheckItem key={item.id}>
          <div className="iconBox">
            <CheckBox
              size="small"
              id={`item${item.id}`}
              name={`item${item.id}`}
              checked={item.checked}
              onClick={() => handleCheckedItem(item.id)}
            />
          </div>
          <label htmlFor={`item${item.id}`}>{item.title}</label>
        </CheckItem>
      ))}
    </VowelWrap>
  );
};

export default BoxVowel;
