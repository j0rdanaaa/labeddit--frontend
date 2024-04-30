import fetchApi from "./customFetch";

export const getPosts = async () => {
  const response = await fetchApi("posts", {
    method: "GET",
  });

  return response;
};

export const createPost = async (body: any) => {
  const response = await fetchApi("posts", {
    body,
    method: "POST",
  });

  return response;
};

export const likeOrDislike = async (id: string, body: any) => {
  const response = await fetchApi(`posts/${id}/like`, {
    body,
    method: "PUT",
  });

  return response;
};

export const getPostById = async (id: string) => {
  const response = await fetchApi(`posts/${id}`, {
    method: "GET",
  });

  return response;
};
