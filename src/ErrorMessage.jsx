function ErrorMessage({ message }) {
  return (
    <div className="error-msg">
      <p>{message}</p>
      <p>
        We’re having trouble loading the recipes right now. Please try again
        later.
      </p>
    </div>
  );
}

export default ErrorMessage;
