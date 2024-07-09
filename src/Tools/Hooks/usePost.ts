export const usePost = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const handlePress = async (url: string, objectPost: object) => {
    if (Object.values(objectPost).some((value) => value === "")) {
      return false;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        },
        body: JSON.stringify(objectPost),
      });

      console.log(await response.json());

      if (!response.ok) throw new Error("Error en la petición POST");

      return true;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handlePress,
  };
};
