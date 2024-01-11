const endpoint = "https://657eea0d9d10ccb465d57fa1.mockapi.io/items";

export const getAllItems = async () => {
  let response, error;

  try {
    const data = await fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    response = await data.json();
  } catch (err) {
    error = err;
  }

  return { response, error };
};
