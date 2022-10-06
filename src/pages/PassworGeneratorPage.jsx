import {
  Button,
  CharacterLength,
  InputPassword,
  Notification,
  PasswordOptions,
  SecurityLevel,
} from '../components';
import { PasswordProvider } from '../context';

export const PassworGeneratorPage = () => {
  return (
    <PasswordProvider>
      <main className='main'>
      <Notification />
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h1 className="title">Generador de contraseña</h1>
            <InputPassword />
            <CharacterLength />
            <PasswordOptions />
            <SecurityLevel />
            <Button />
          </div>
        </div>
      </div>
    </main>
    </PasswordProvider>
  );
};
