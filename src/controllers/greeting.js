export const greeting = (req,res) => {
    const users = [
        {
          name: 'Juan',
          last_name: 'Pérez',
          age: 28,
          mail: 'juan.perez@gmail.com',
        },
        {
          name: 'María',
          last_name: 'Rodríguez',
          age: 32,
          mail: 'maria.rodriguez@gmail.com',
        },
        {
          name: 'Pedro',
          last_name: 'García',
          age: 26,
          mail: 'pedro.garcia@gmail.com',
        },
        {
          name: 'Ana',
          last_name: 'Martínez',
          age: 30,
          mail: 'ana.martinez@gmail.com',
        },
        {
          name: 'Luis',
          last_name: 'Sánchez',
          age: 35,
          mail: 'luis.sanchez@gmail.com',
        }
      ];
    const food = [
        {name:"pizza", price:100},
        {name:"pizza2", price:110},
        {name:"pizza3", price:120},
        {name:"pizza4", price:130}

    ];
    const randomIndex = Math.floor(Math.random() *users.length)

    const user = users [randomIndex];
    // console.log(user);
    
    let testUser ={
      name: "Tikiii",
      last_name:"Emiliano",
      age: 21,
      mail: "alejandroemiliano21@gmail.com",
      role:"admin"
    }
    res.render('register', {
        user:testUser,
        style:'index.css',
        isAdmin: testUser.role === "admin",
        food
    });
  }