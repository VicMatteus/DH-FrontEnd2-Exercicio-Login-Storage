const baseDeDados = {
    usuarios: [
        {
        id: 0,
        name: "teve Jobs",
        email: "eve@jobs.com",
        password: "eve123",
        },
        {
        id: 1,
        name: "Steve Jobs",
        email: "steve@jobs.com",
        password: "Steve123",
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "shanna@melissa.tv",
        password: "Ervin345",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        email: "nathan@yesenia.net",
        password: "Floppy39876",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        email: "julianne.oconner@kory.org",
        password: "MysuperPassword345",
      },
    ],
  };

//console.log(baseDeDados.usuarios)
let usuarios = baseDeDados.usuarios
//console.log(usuarios[1])
for(let elemento of baseDeDados.usuarios)
{ 
    console.log(elemento.name)
}
  
// for(let elemento of dataBase)
// {
//     console.log(elemento.nome);
// }
