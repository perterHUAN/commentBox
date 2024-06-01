export const createComment = (formData) =>
  fetch("/comment", {
    method: "POST",
    body: formData,
  }).then((res) => res.json());

export const addLikes = ({ userName }) =>
  fetch("/likes", {
    method: "POST",
    body: {
      likes: 1,
      userName,
    },
    headers: {
      contentType: "appliction/json",
    },
  }).then((res) => res.json());
