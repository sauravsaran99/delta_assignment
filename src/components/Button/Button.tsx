import React from 'react';
import styles from './PlusButton.module.css'; // Import the module CSS file for styling
import plus from './plus.svg'

interface PlusButtonProps {
  onClick: () => void;
  text: string
}

const Button: React.FC<PlusButtonProps> = ({ onClick, text }) => {
    
  return (
    <button className={styles.plusButton} onClick={onClick}>
      {text}<span style={{fontSize: '30px'}}><img src="/plus.svg" width={'30px'} height={'20px'} style={{color: 'white'}} /></span>
    </button>
  );
};

export default Button;
