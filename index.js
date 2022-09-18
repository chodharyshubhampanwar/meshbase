fetch("https://reqres.in/api/users/23", {
  method: "POST",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
