import routes from "../routes";


// join process
export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    console.log(req.body);
    // ES6문법 body로 전달된 객체에서 name, email, password, password2를 가져옴.
    const {
        body: { name, email, password, password2 }
    } = req; // request

    if (password !== password2) {
        res.status(400); // 안맞으면 status code 발사
        res.render("join", { pageTitle: "Join" });
    } else {
        // To-do: Resiter User
        // To-do: Log user in  
        res.redirect(routes.home) // home으로 리다이렉트
    }
};


// login process
export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Log in" });
}
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    // To-do: Process Logout
    res.redirect(routes.home);
}

export const userDetail = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail" });
}

export const editProfile = (req, res) => {
    res.render("editProfile", { pageTitle: "Edit Profile" });
}

export const changePassword = (req, res) => {
    res.render("changePassword", { pageTitle: "Change Password" });
}