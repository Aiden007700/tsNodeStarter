import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "../entity/User";

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (username: string, password: string, done: any) => {
    let userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { username } });
    if (!user) {
      return done(null, false, { msg: "Incorrect username" });
    }
    await bcrypt.compare(password, user.password, (err, res) => {
      if (res) {
        return done(null, user);
      } else {
        return done(null, false, { msg: "Incorrect password" });
      }
    });
  })
);

passport.serializeUser(function (user: User, done: any) {
  done(null, user.id);
});

passport.deserializeUser(async function (id: number, done: any) {
  let userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { id } });
  done(null, user);
});
