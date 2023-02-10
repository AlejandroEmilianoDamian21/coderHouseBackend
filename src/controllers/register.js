export const getRegister = async (req, res) => {
    res.render('register', { title: 'Registration', style:'index.css'});
}

export const createRegister = async   (req, res) => {

    const user =  {
        email: req.body.email,
        fullName: req.body.fullName,
        password: req.body.password
    }
    let users = []
    users.push(user);
    // console.log(users[users.length-1]);
    console.log(user);
    res.send(`Usuario guardado exitosamente. `);
}
