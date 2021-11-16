const instance = axios.create({
  baseURL: "https://growbank-api-backend.herokuapp.com",
});
const btnLogin = document.getElementById("_signIn");

btnLogin.addEventListener("click", () => {
  const username = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;
  instance
    .get("/")
    .then((result) => {
      console.log(result.data.employeesGrowBank);
      const array = result.data.employeesGrowBank;
      array.forEach((employee) => {
        if (employee.username == username && employee.password == password) {
          window.location.href = "cadastros.html";
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
