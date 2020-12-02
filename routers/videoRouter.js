import express from "express";
import { editProfile } from "../controller/userController";
import { deleteVideo, editVideo, getUpload, postUpload, upload, videoDetail } from "../controller/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";
const videoRouter = express.Router();

// upload videos
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editProfile, editProfile);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
