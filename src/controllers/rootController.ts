import bcrypt from "bcrypt";
import passport from "passport";
import { getConnection } from "typeorm";
import { Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../custom_typings/types";
import { User } from "../entity/User";

const rootController: any = {};

rootController.index = (req: IGetUserAuthInfoRequest, res: any) => {
  res.render("index", { user: req.user });
};

rootController.signUp = (req: Request, res: Response) =>
  res.render("sign-up-form");

rootController.postSignUp = async (req: Request, res: Response) => {
  const connection = await getConnection();

  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    let user = new User();
    user.age = 25;
    user.firstName = "Aiden";
    user.lastName = "Campbell";
    user.username = req.body.username;
    user.password = hashedPassword;
    let userRepository = connection.getRepository(User);
    await userRepository.save(user);
    res.redirect("/log-in");
  });
};

rootController.logIn = (req: Request, res: Response) => {
  res.render("log-in");
};

rootController.postLogIn = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
});

rootController.logOut = (req: Request, res: Response) => {
  req.logout();
  res.redirect("/");
};

export default rootController;
