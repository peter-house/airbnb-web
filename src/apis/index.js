const HOST = "http://localhost:3000";

export const getLocationData = () => {
  return fetch(`${HOST}/location`)
    .then((res) => res.json())
};
