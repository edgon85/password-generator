import { useState } from 'react';
import { usePassGenerate } from '../../hooks/usePassGenerate';
import { Icon } from '../Icon';

export const OptionItem = ({ title, value }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { changeOptions } = usePassGenerate();

  const handleClick = () => {
    setIsSelected(!isSelected);
    changeOptions(value, !isSelected);
  };

  return (
    <>
      <div className="option-item" onClick={handleClick}>
        <Icon
          name={!isSelected ? 'square' : 'checkSquare'}
          color="var(--blue-dark)"
          size={24}
        />
        <p>{title}</p>
      </div>
    </>
  );
};
