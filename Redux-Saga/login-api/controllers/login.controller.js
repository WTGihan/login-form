const login = (req, res) => {
  console.log("Req Body", req.body);
  const { email, password } = req.body;
  email.toLowerCase() === "wtgihan@gmail.com" && password === "1234"
    ? res.code(200).send({ loginStatus: "SUCCESS" })
    : res.code(200).send({ loginStatus: "FAILED" });
};

module.exports = {
  login,
};
