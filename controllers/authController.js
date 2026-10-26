function showLogin(req, res) {
    res.render("login")
}

function showRegister(req, res) {
    res.render("register")
}

module.exports = { showLogin, showRegister }