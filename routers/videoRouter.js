import express from "express";
import { editProfile } from "../controller/userController";
import {
    videoDetail,
    getUpload,
    postUpload,
    getEditVideo,
    postEditVideo,
    deleteVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";
const videoRouter = express.Router();

// upload videos
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail 
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.editProfile, editProfile);
// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
