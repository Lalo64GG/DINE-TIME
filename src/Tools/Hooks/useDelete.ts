const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const useDelete = () => {
  const handleDelete = async (url: string, token: string) => {

    console.log(`${apiUrl}/${url}`, "Token", token)

    try {
      const res = await fetch(`${apiUrl}/${url}`, {
        method: "DELETE",
        headers: {
          "x-api-key": `${apiKey}`,
          Authorization: ` ${token}`,
          "Content-Type": "application/json",
        },
      });
      const re = await res.json();
      console.log(re)

      if (!res.ok) throw new Error("Error al eliminar");

    

      return true;
    } catch (error) {
      if (error instanceof Error) 
        console.log(error.message);
    }
  };

  return {
    handleDelete,
  };
};
