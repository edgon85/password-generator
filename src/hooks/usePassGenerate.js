import { useContext, useState } from 'react';
import { PasswordContext } from '../context';

const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$.+-_';

export const usePassGenerate = () => {
  const {onChangeOptions, password, onChangeCharacters, passwordState, onGeneratePassword } =
    useContext(PasswordContext);
  const [characterLength, setCharacterLength] = useState(0);

  /* ······································································ */
  const handleInputChange = ({ target }) => {
    const { min, max, value } = target;

    setCharacterLength(value);
    onChangeCharacters(value);

    target.style.backgroundSize =
      ((value - min) * 100) / (max - min) + '% 100%';
  };

  /* ······································································ */
  const generatePassword = () => {
    const strings = `${passwordState.upperCaseLetters ? UPPER_CASE : ''}${
      passwordState.lowerCaseLetters ? LOWER_CASE : ''
    }${passwordState.numbers ? NUMBERS : ''}${
      passwordState.simbols ? SYMBOLS : ''
    }`;

    if (strings.length === 0 || passwordState.character < 4) return;
    const pass = createRandomPass(passwordState.character, strings.trim());

    onGeneratePassword(pass);
  };

  /* ······································································ */
  const createRandomPass = (longitude, strings) => {
    let pass = '';

    for (let i = 1; i <= longitude; i++) {
      const character = Math.floor(Math.random() * strings.length);

      pass = pass.concat(strings.charAt(character));
    }

    return pass;
  };
  /* ······································································ */

  const handleCopyText = () => {
    if (password === '') return;

    const $noty = document.querySelector('.notification-alert');
    navigator.clipboard.writeText(password).then((_) => {
      
      $noty.style.display = 'inline-block';
      $noty.style.insetInlineEnd = '1rem';
      
      setTimeout(() => {
        $noty.style.insetInlineEnd = '-100%';
        $noty.style.display = 'none';
      }, 1500);
    });
  };

  /* ······································································ */
  const getLevel = () => { 
    let level = 0;
    const { character, upperCaseLetters, numbers, simbols, lowerCaseLetters } =
      useContext(PasswordContext);
  
    const opt = [upperCaseLetters, lowerCaseLetters, numbers, simbols];
  
    const optionLevel = opt.filter((op) => op === true).length;
  
    if (character >= 6 && optionLevel === 4) {
      level = 4;
    } else if (optionLevel === 4) {
      level = 3;
    } else if (optionLevel === 3) {
      level = 3;
    } else if (optionLevel === 2) {
      level = 2;
    } else if (optionLevel === 1) {
      level = 1;
    } else {
      level = 0;
    }

    return level;
  }
  /* ······································································ */

  const changeOptions = (optionId, optionvalue) => {
    switch (optionId) {
      case 'upercase':
        onChangeOptions('changeUpercase', optionvalue );
        break;
      case 'lowercase':
        onChangeOptions('changeLowercase', optionvalue);
        break;
      case 'numbers':
        onChangeOptions('changeNumbers', optionvalue);
        break;
      case 'simbols':
        onChangeOptions('changeSimbols', optionvalue);
        break;
    }
  };

  /* ······································································ */

  return {
    // propiedades
    password,

    //metodos
    generatePassword,
    characterLength, // <=
    handleInputChange, // <=
    handleCopyText,
    getLevel,
    changeOptions
  };
};
