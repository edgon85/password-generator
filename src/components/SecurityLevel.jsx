import { usePassGenerate } from '../hooks/usePassGenerate';

export const SecurityLevel = () => {
  const { getLevel } = usePassGenerate();

  const level = getLevel();

  return (
    <>
      <div className="security">
        <p>Nivel de seguridad</p>
        <div className="levels">
          <span
            className={`block level-1 ${level >= 1 ? 'add-segurity' : ''}`}
          ></span>
          <span
            className={`block level-2 ${level >= 2 ? 'add-segurity' : ''}`}
          ></span>
          <span
            className={`block level-3 ${level >= 3 ? 'add-segurity' : ''}`}
          ></span>
          <span
            className={`block level-4 ${level >= 4 ? 'add-segurity' : ''}`}
          ></span>
        </div>
      </div>
    </>
  );
};
