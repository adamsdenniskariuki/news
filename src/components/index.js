import React from "react";
import moment from "moment";

import "./Styles.css";

const resizeUrl = "https://news.theonlinekenyan.com/uploads/news_images/";

const playVideo = (videoID, videoLink) => {
  document.getElementById(videoID).style.display = "block";

  let iframe = document.createElement("iframe");
  iframe.src = `https://youtube.com/embed/${videoLink
    .split("=")
    .pop()}?autoplay=1`;
  iframe.width = 400;
  iframe.height = 300;
  iframe.title = videoLink;

  document.getElementById(videoID).appendChild(iframe);
};

export const Videos = videos => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Published</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {videos.videos.map(video => (
            <tr key={video.ID}>
              <td>
                <img
                  src={`${resizeUrl}/${video.ImageURL}`}
                  alt="Not available"
                />
              </td>
              <td>{video.Title}</td>
              <td>
                Posted {moment(video.Published).fromNow(video.Published)} ago
              </td>
              <td>
                <button
                  className="VideoButton"
                  onClick={() => playVideo(video.ID, video.Link)}
                >
                  Play Video
                </button>
                <div id={video.ID} className="Hidden" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
