
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos: videos });
    } catch (error) {
        console.log(error)
        res.render("home", { pageTitle: "Home", videos: [] });
    }

};

export const search = (req, res) => {
    // const searchingBy = req.query.term; // ES6 이전의 코딩 방식 
    // is the new way
    const {
        query: { term: searchingBy } // ES6문법 query로 전달된 객체에서 term을 가져옴.
    } = req;

    res.render("search", { pageTitle: "Search", searchingBy: searchingBy, videos: videos })
};


// upload
export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;

    // To-do: Upload video and save to DB

    res.redirect(routes.videoDetail(2134123))
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
