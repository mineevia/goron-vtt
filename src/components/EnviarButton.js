import './EnviarButton.css';

function EnviarButton({ children = 'Enviar', disabled = false, onClick }) {
  return (
    <button
      className='enviar-button'
      disabled={disabled}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
}

export default EnviarButton;
