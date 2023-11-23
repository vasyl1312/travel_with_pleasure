import express from "express";
import { Router } from "express";
import * as authController from "../controllers/authController";
import * as userController from "../controllers/userController";
import * as messageController from "../controllers/messageController";
import * as groupChatController from "../controllers/groupChatController";
import * as privateChatController from "../controllers/privateChatController";

const router: Router = express.Router();

//auth
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

//user
router.get("/users", userController.getAllUsers); //without me/////need to add
router.delete("/users", userController.deleteUser);
router.post("/avatar", userController.setAvatar);
router.get("/profile", userController.getUserProfile);

//message
router.get("/find", messageController.findUserByNickname);

//chats
router.post("/createChat", groupChatController.createGroupChat);
router.post("/createPrivateChat", privateChatController.createPrivateChat);

//private chat(need create different table)

export default router;
