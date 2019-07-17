import React from "react";

import { fetchVideos } from "./api/index";
import { Videos } from "./components/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  async componentDidMount() {
    const videos = await fetchVideos();
    this.setState({ videos });
  }
  render() {
    const { videos } = this.state;

    if (videos && videos.data && videos.data.Data.length > 0) {
      return <Videos videos={videos.data.Data} />;
    }
    return <div className="App">Loading...</div>;
  }
}

export default App;
