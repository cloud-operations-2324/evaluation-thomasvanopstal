function Hello() {
  return fetch("http://openfaas.81.co.ucll.cloud/function/countv3", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.body.result);
}
export default {
  Hello,
};
