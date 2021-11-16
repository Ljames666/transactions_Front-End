const api = axios.create({
    baseURL: "https://growbank-api-backend.herokuapp.com",
});

document.getElementById("addClient").addEventListener("click", () => {
    var _name = document.getElementById("floatingInputName").value;
    var _cpf = document.getElementById("floatingInputCpf").value;
    var _email = document.getElementById("floatingInputEmail").value;
    var _age = document.getElementById("floatingInputAge").value;
    api.post("/clients", {
        name: _name,
        cpf: _cpf,
        email: _email,
        age: _age,
    })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            log.error(err);
        });
});

// functions

// function name(params) {
// }

document.getElementById("_list").addEventListener("click", () => {
    api.get("/clients")
        .then((result) => {
            var printList = document.getElementById("print");
            const array = result.data.list;
            console.log(array);

            printList.innerHTML = "";
            array.forEach((client) => {
                printList.innerHTML += `<li class="list-group-item list-group-item-success text-center">Id: ${client.id} - Name: ${client.name} - Cpf: ${client.cpf} - Email: ${client.email} - Age: ${client.age} </li> `;
            });

            if (printList.innerHTML == "") {
                printList.innerHTML += `<li class="list-group-item list-group-item-danger text-center">Nenhum usuário cadastrado</li> `;
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

document.getElementById("searchClient").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputIdCli").value;
    api.get(`/clients/${_idClient}`)
        .then((result) => {
            console.log(result.data.client);
            const array = result.data.client;
            var printList = document.getElementById("print");

            console.log(array.name);
            printList.innerHTML = "";
            printList.innerHTML += `<li class="list-group-item list-group-item-success text-center">Id: ${array.id} - Name: ${array.name} - Cpf: ${array.cpf} - Email: ${array.email} - Age: ${array.age} </li> `;
        })
        .catch((error) => {
            console.log(error);
            var printList = document.getElementById("print");
            printList.innerHTML = "";
            printList.innerHTML += `<li class="list-group-item list-group-item-danger text-center">Usuário de id ${_idClient} não existe.</li> `;
        });
});

document.getElementById("editClient").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputIdCli").value;
    var _name = document.getElementById("floatingInputName").value;
    var _cpf = document.getElementById("floatingInputCpf").value;
    var _email = document.getElementById("floatingInputEmail").value;
    var _age = document.getElementById("floatingInputAge").value;
    api.put(`/clients/${_idClient}`, {
        name: _name,
        cpf: _cpf,
        email: _email,
        age: _age,
    })
        .then((result) => {
            console.log(result.data.client);
            const array = result.data.client;
            var printList = document.getElementById("print");

            console.log(array.name);
            printList.innerHTML = "";
            printList.innerHTML += `<li class="list-group-item list-group-item-success text-center">Id: ${array.id} - Name: ${array.name} - Cpf: ${array.cpf} - Email: ${array.email} - Age: ${array.age} </li> `;
        })
        .catch((error) => {
            console.log(error);
            var printList = document.getElementById("print");
            printList.innerHTML = "";
            printList.innerHTML += `<li class="list-group-item list-group-item-danger text-center">Usuário de id ${_idClient} não existe.</li> `;
        });
});

document.getElementById("deleteClient").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputIdCli").value;
    api.delete(`/clients/${_idClient}`)
        .then((result) => console.log(result.data))
        .catch((error) => {
            console.log(error);
            var printList = document.getElementById("print");
            printList.innerHTML = "";
            printList.innerHTML += `<li class="list-group-item list-group-item-danger text-center">Usuário de id ${_idClient} não existe.</li> `;
        });
});
// CLIENTS END!

//TRANSACTION START!!

document.getElementById("addTransaction").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputUid").value;
    var _title = document.getElementById("floatingInputTitle").value;
    var _value = document.getElementById("floatingInputValue").value;
    var _type = document.querySelector("#floatingInputType").value;
    api.post(`/clients/${_idClient}/transactions`, {
        title: _title,
        value: _value,
        type: _type,
    })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            log.error(err);
        });
});
document.getElementById("_listTransction").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputUid").value;
    api.get(`/clients/${_idClient}/transactions`)
        .then((result) => {
            console.log(result.data);
            const _balance = result.data.balance;
            const _nameClient = result.data.nameClient;
            const _transactions = result.data.transactions;
            var printList = document.getElementById("printTransaction");
            _transactions.forEach((transaction) => {
                printList.innerHTML += `
      <li class="list-group-item list-group-item-success">Client: ${_nameClient.toString()} </li>
      <li class="list-group-item list-group-item-success">Balance:</br> ${_balance.income}</br>${_balance.outcome}</br>${_balance.total} </li>
      <li class="list-group-item list-group-item-success">Transactions:</br>  ${transaction.id}</br> 
      ${transaction.title}</br> ${transaction.value}</br> ${transaction.type} </li>
       
      `;
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

document.getElementById("_transaction").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputUid").value;
    var _idTransaction = document.getElementById("floatingInputTid").value;
    api.get(`/clients/${_idClient}/transactions/${_idTransaction}`)
        .then((result) => {
            console.log(result.data.transaction);
            const array = result.data.transaction;

            var printList = document.getElementById("printTransaction");

            printList.innerHTML += `<li class="list-group-item list-group-item-success">Id: ${array.id} </br>
       Title: ${array.title}
       </br> Value: ${array.value} 
       </br>Type: ${array.type} </li> `;
        })
        .catch((error) => {
            console.log(error);
        });
});

document.getElementById("editTransaction").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputUid").value;
    var _idTransaction = document.getElementById("floatingInputTid").value;
    var _title = document.getElementById("floatingInputTitle").value;
    var _value = document.getElementById("floatingInputValue").value;
    var _type = document.querySelector("#floatingInputType").value;

    api.put(`/clients/${_idClient}/transactions/${_idTransaction}`, {
        title: _title,
        value: _value,
        type: _type,
    })
        .then((result) => {
            console.log(result.data);
            const array = result.data.transaction;
            var printList = document.getElementById("print");

            printList.innerHTML += `<li class="list-group-item list-group-item-success">Id: ${array.id} </br>
       Title: ${array.title}
       </br> Value: ${array.value} 
       </br>Type: ${array.type} </li> `;
        })
        .catch((error) => {
            console.log(error);
        });
});

document.getElementById("deleteTransaction").addEventListener("click", () => {
    const _idClient = document.getElementById("floatingInputUid").value;
    var _idTransaction = document.getElementById("floatingInputTid").value;
    api.delete(`/clients/${_idClient}/transactions/${_idTransaction}`)
        .then((result) => console.log(result.data.message))
        .catch((error) => {
            console.log(error);
        });
});
