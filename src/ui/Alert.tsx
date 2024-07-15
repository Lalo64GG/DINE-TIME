type AlertProps = {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Alert = ({ message, type, onClose }: AlertProps) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
      style={{ zIndex: 9999 }} 
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button className="ml-4" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
