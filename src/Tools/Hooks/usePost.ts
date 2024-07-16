export const usePost = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const handlePress = async (url: string, objectPost: object, token?: string) => {

    console.log(objectPost)

    if (Object.values(objectPost).some((value) => value === "")) {
      return false;
    }

    try {
      const headers: { [key: string]: string } = {
        "Content-Type": "application/json",
        "x-api-key": `${apiKey}`,
      };

      if (token) {
        headers["Authorization"] = ` ${token}`;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(objectPost),
      });

      const data = await response.json();
      if (!response.ok) throw new Error("Error en la petición POST");

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if(data.uid) {
        localStorage.setItem("uid", data.uid);
      }

      console.log(response)

      return true;
    } catch (error) {
      if(error instanceof Error)
      console.error(error.message);
    }
  };

  return {
    handlePress,
  };
};
