function count(number) {
  return fetch("https://openfaas.81.co.ucll.cloud/function/countv2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ number: number }),
  })
    .then((response) => response.json())
    .then((data) => data);
}
export default {
  count,
};
