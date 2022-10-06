import { useReducer } from 'react';
import { PasswordContext } from './PasswordContext';
import { passwordReducer } from './passwordReducer';

export const PasswordProvider = ({ children }) => {
  const [passwordState, dispatch] = useReducer(passwordReducer, {
    password: '',
    character: 0,
    upperCaseLetters: false,
    lowerCaseLetters: false,
    numbers: false,
    simbols: false,
  });

  /* ························································· */
  const onChangeCharacters = (character) =>
    dispatch({ type: 'changeCharacter', payload: character });

  /* ························································· */
  const onChangeOptions = (optionId, optionvalue) => {
    dispatch({ type: optionId, payload: optionvalue });

  };
  /* ························································· */

  const onGeneratePassword = (newpassword) => {
    dispatch({ type: 'generatePassword', payload: newpassword });
  };

  return (
    <PasswordContext.Provider
          value={{
        //propiedades
        ...passwordState,
        passwordState,

        //metodos
        onChangeCharacters,
        onChangeOptions,
        onGeneratePassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
