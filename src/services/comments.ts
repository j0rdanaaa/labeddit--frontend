import fetchApi from "./customFetch";

export const createComment = async (postId: string, body: any) => {
  const response = await fetchApi(`posts/${postId}/comment`, {
    method: "POST",
    body,
  });

  return response;
};

export const likeOrDislikeComment = async (
  postId: string,
  commentId: string,
  body: any
) => {
  const response = await fetchApi(`posts/${postId}/comment/${commentId}/like`, {
    body,
    method: "PUT",
  });

  return response;
};
