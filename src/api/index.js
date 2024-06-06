export const fetchData = async (url) => {
  const response = await fetch(url, { method: "GET" });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Couldn't fetch data, front.");
};

export const postData = async (url, requestData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Couldn't post data, front.");
};

export const deleteData = async (url) => {
  const response = await fetch(url, { method: "DELETE" });

  if (response.ok) {
    return;
  }
  throw new Error("Couldn't delete data, front.");
};

export const updateData = async (url, requestData) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error("Couldn't update data, front.");
};
