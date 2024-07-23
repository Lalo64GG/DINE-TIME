// src/components/Molecules/RenderBalance.tsx

type Estadisticas = {
    id: string;
    ocupacion: number;
    Total: number;
    createdAt: string;
  }
  
  interface RenderBalanceProps {
    balanceData: Estadisticas[];
  }
  
  export const RenderBalance = ({ balanceData }: RenderBalanceProps) => {
  
    if (!Array.isArray(balanceData)) {
      return <div>Error: los datos del balance no son válidos.</div>;
    }
  
    return (
      <div className="bg-white rounded-lg shadow-2xl p-6">
       
        <div className="balance-content grid grid-cols-1 gap-4">
          {balanceData.map((balance, index) => (
            <div key={index} className="balance-item bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold">Fecha: <span className="font-normal">{balance.createdAt}</span></p>
              <p className="font-semibold">Ingresos: <span className="font-normal">${balance.Total}</span></p>
              <p className="font-semibold">Balance: <span className="font-normal">{balance.ocupacion}</span></p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RenderBalance;
  