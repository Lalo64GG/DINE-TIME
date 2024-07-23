import { useEffect, useState } from "react";
import { DataLoader } from "../../ui/Spinner";

const url = import.meta.env.VITE_API_URL;

type Table = {
  id: string;
  num_mesa: number;
};

type TableResponse = {
  mesa: Table[];
};

type TableSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (table: Table) => void;
};

export const TableSelectionModal = ({ isOpen, onClose, onSelect }: TableSelectionModalProps) => {
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const fetchTables = async () => {
        try {
          const response = await fetch(`${url}/mesas/mesa`, {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": import.meta.env.VITE_API_KEY,
            },
          });
          if (!response.ok) throw new Error('Error en la respuesta de red');
          const data: TableResponse = await response.json();
          setTables(data.mesa);
        } catch (error) {
          setError("No se pudo cargar la lista de mesas.");
        } finally {
          setLoading(false);
        }
      };

      fetchTables();
    }
  }, [isOpen]);

  const handleSelect = () => {
    if (selectedTable) {
      onSelect(selectedTable);
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Seleccionar Mesa</h2>
        {loading ? (
          <DataLoader />
        ) : error ? (
          <p>{error}</p>
        ) : tables.length > 0 ? (
          <div>
            {tables.map((table) => (
              <div key={table.id} className="mb-2">
                <button
                  onClick={() => setSelectedTable(table)}
                  className={`p-2 w-full rounded ${selectedTable?.id === table.id ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  Mesa {table.num_mesa}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No se encontraron mesas disponibles.</p>
        )}
        <div className="mt-4">
          <button onClick={onClose} className="mr-2 p-2 bg-red-500 text-white rounded">Cancelar</button>
          <button onClick={handleSelect} className="p-2 bg-green-500 text-white rounded">Seleccionar</button>
        </div>
      </div>
    </div>
  );
};
