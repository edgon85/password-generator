
import { Icon } from './Icon';

export const Notification = () => {
  return (
    <div className="notification-alert">
      <div className="notification-content">
        <Icon name="check" color="var(--blue)" size={30} />
        <p>Contraseña copiada al portapapeles.</p>
      </div>
    </div>
  );
};
