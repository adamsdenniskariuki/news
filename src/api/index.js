import axios from "axios";

export const fetchVideos = async () => {
  try {
    const videos = await axios.get(
      "https://news.theonlinekenyan.com/api/stories/video"
    );
    return videos;
  } catch (error) {
    console.error(error);
  }
};
