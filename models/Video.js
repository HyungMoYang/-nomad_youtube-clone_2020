import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        requried: "File URL is required"
    },
    title: {
        type: String,
        requried: "Title is requried"
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Video", VideoSchema);

export default model;