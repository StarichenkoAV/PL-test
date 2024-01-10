
const endpoint = "https://657eea0d9d10ccb465d57fa1.mockapi.io/items"

  export const getAllItems = async () => {
    const response = await fetch(endpoint, {
       method: "GET",
       headers: {"Content-Type": "application/json"} ,
    });
    const data = await response.json();
    return data
  }