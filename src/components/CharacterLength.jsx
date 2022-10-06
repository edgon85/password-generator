import { usePassGenerate } from '../hooks/usePassGenerate';

export const CharacterLength = () => {
  const { characterLength, handleInputChange } = usePassGenerate();

  return (
    <>
      <div className="longitud-txt">
        <h2>Longitud de carácter</h2>
        <span>{characterLength}</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        name="characterLength"
        value={characterLength}
        onChange={handleInputChange}
      />
    </>
  );
};
