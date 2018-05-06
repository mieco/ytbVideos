import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import _ from "lodash";
const API_KEY = "AIzaSyDJeuFYERFSi8oVdRe2x-bM4keKRRlGBlw";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectVideo: null
        }

        this.searcrVideos("nba")

    }

    searcrVideos(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            console.log(videos)
            this.setState({ videos, selectVideo: videos[0] })
        })
    }
    render() {
        const videoSearch = _.debounce((term) => { this.searcrVideos(term) }, 1000)

        return (
            <div>
                <SearchBar onInput={videoSearch} />
                <VideoDetail video={this.state.selectVideo} />
                <VideoList
                    onVidelSelect={selectVideo => this.setState({ selectVideo })}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("container"))