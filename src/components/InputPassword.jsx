import { usePassGenerate } from '../hooks/usePassGenerate';
import { Icon } from './Icon';

export const InputPassword = () => {
  const { handleCopyText, password } = usePassGenerate();

  return (
    <>
      <form className="form">
        <input
          type="text"
          value={password}
         
          disabled
        />
        <button
          style={{ cursor: `${password !== '' ? 'pointer' : 'auto'} ` }}
          type="button"
          className="copy"
          onClick={handleCopyText}
        >
          <Icon
            name="copy"
            color={password !== '' ? 'var(--blue)' : 'var(--grey-dark)'}
            size={24}
          />
        </button>
      </form>
    </>
  );
};
