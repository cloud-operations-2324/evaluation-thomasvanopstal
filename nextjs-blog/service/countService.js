function count(number) {
  const blob = new Blob([JSON.stringify({ number: number })], {
    type: "application/json",
  });
  return fetch("http://openfaas.81.co.ucll.cloud/function/countv3", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: blob,
  })
    .then((response) => response.json())
    .then((data) => data);
}
export default {
  count,
};
