async function Hello() {
  const data = await fetch(
    "http://openfaas.81.co.ucll.cloud/function/countv3",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const response = await data.json();
  return response;
}
export default {
  Hello,
};
