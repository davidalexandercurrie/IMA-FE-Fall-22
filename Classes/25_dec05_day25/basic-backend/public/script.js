async function getDataFromServer() {
  const res = await fetch('http://localhost:8080/getdata', { method: 'GET' });
  const data = await res.json();
  console.log(data);
}
