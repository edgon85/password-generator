const initialState = {
  password: '',
  character: 0,
  upperCaseLetters: false,
  lowerCaseLetters: false,
  numbers: false,
  simbols: false,
};

export const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'generatePassword':
      return {
        ...state,
        password: action.payload,
      };

    case 'changeCharacter':
      return {
        ...state,
        character: action.payload,
      };

    case 'changeUpercase':
      return {
        ...state,
        upperCaseLetters: action.payload,
      };
    case 'changeLowercase':
      return {
        ...state,
        lowerCaseLetters: action.payload,
      };
    case 'changeNumbers':
      return {
        ...state,
        numbers: action.payload,
      };
    case 'changeSimbols':
      return {
        ...state,
        simbols: action.payload,
      };

    default:
      return state;
  }
};
