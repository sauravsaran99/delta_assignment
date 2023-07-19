import React from 'react';
import styles from './PlusButton.module.css'; // Import the module CSS file for styling
import plus from './plus.svg'

interface PlusButtonProps {
  onClick: (e:any) => void;
  text: string,
  source: string | null,
  bgColor: string | undefined,
  color: string | undefined
}

const Button: React.FC<PlusButtonProps> = ({ onClick, text, source, bgColor = "#7bff", color }) => {

  return (
    <button style={{ background: bgColor, color: color }} className={styles.plusButton} onClick={onClick}>
      {text}<span style={{ fontSize: '30px' }}>{source && <img src={source} width={'30px'} height={'20px'} style={{ color: 'white' }} />}</span>
    </button>
  );
};

export default Button;
