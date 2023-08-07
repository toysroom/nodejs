const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = app => {

  var router = require("express").Router();

  router.get("/profile", [authJwt.verifyToken], controller.profile)
  
  router.get("/all", controller.allAccess);

  router.get("/user", [authJwt.verifyToken], controller.userBoard);

  router.get(
    "/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
    
  app.use("/api/user", router);
};
