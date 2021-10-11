const login = (req, res) => {
  const { email, password } = req.body;
  email.toLowerCase() === "wtgihan@gmail.com" && password === "1234"
    ? res.code(200).send({ loginStatus: "SUCCESS" })
    : res.code(404).send({ loginStatus: "FAILED" });
};

module.exports = {
  login,
};
