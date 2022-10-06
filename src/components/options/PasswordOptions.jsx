import { OptionItem } from './OptionItem';

export const PasswordOptions = () => {
  return (
    <>
      <section className="form-options">
        <OptionItem title="Incluye letras mayúsculas." value="upercase" />
        <OptionItem title="Incluye letras minúsculas." value="lowercase" />
        <OptionItem title="Incluye números." value="numbers" />
        <OptionItem title="Incluye símbolos." value="simbols" />
      </section>
    </>
  );
};
