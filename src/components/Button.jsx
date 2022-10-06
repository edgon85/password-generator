import { usePassGenerate } from '../hooks/usePassGenerate';

export const Button = () => {
  const { generatePassword } = usePassGenerate();

  return (
    <>
      <button onClick={() => generatePassword()} className="btn-submit">
        Generar contraseña
      </button>
    </>
  );
};
