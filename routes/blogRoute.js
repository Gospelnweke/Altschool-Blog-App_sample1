const Router = require("express");
const blogcontroller = require("../controllers/blogcontroller");

const {
  updateBlogCheck,
  updateBlogBodyCheck,
  deleteBlogCheck,
  createBlogCheck,
  getMyBlogsCheck,
} = require("../middlewares/blogMiddleware");

const blogRouter = Router();

//CREATE BLOG
blogRouter.post("/createblog", createBlogCheck, blogcontroller.creatblog_post);
//GET ALL BLOGS
blogRouter.get("/getblogs", blogcontroller.getblogs_get);
//GET ONLY USER BLOGS
blogRouter.get(
  "/getblogs/myblogs",
  getMyBlogsCheck,
  blogcontroller.getmyblogs_get
);
//GET ONE BLOG
blogRouter.get("/getoneblog", blogcontroller.getOneblog_get);
//UPDATE BLOG STATE
blogRouter.put(
  "/updateblog/state",
  updateBlogCheck,
  blogcontroller.updateblogstate_put
);
//UPDATE BLOG BODY
blogRouter.put(
  "/updateblog/body",
  updateBlogBodyCheck,
  blogcontroller.updateblogbody_put
);
//DELETE BLOG
blogRouter.delete(
  "/deleteblog",
  deleteBlogCheck,
  blogcontroller.deleteblog_delete
);

module.exports = blogRouter;
