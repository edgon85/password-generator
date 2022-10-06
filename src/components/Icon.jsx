import { Check, CheckSquare, Copy, Square } from '../assets/icons';

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'copy': {
      return <Copy {...props} />;
    }

    case 'check': {
      return <Check {...props} />;
    }

    case 'checkSquare': {
      return <CheckSquare {...props} />;
    }

    case 'square': {
      return <Square {...props} />;
    }

    default: {
      return null;
    }
  }
};

Icon.defaultProps = {
  size: 16,
  color: 'white',
};
