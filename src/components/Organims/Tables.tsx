
import {tables} from "../../data/data"

const Tables = () => {
  return (
    <div className="flex space-x-4">
      {tables.map(table => (
        <div
          key={table.id}
          className="flex flex-col items-center p-4 border" 
        >
          <img src={table.imgSrc} alt={table.name} className="w-32 h-32 object-contain" />
          <span className="mt-2 text-center">{table.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tables;
