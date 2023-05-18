import './ErrorModal.css'

const ErrorModal = (props) => {
  const onSubmit = () => {
    props.onClose();
  }

  return (
    <div className="error-modal-wrapper">
      <div className="error-modal">
        <h3>Invalid input</h3>
        <p>Please enter a valid name and age (non-empty values)</p>
        <div className="error-modal-button">
          <button onClick={onSubmit}>Okay</button>
        </div>
      </div>
    </div>
  )
};

export default ErrorModal;