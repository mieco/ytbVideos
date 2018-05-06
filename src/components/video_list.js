import React from "react";
import VideoListItem from "./video_list_item";

const VidelList = ({ videos, onVidelSelect }) => {

    const VidelItems = videos.map(
        video => <VideoListItem onVidelSelect={onVidelSelect} key={video.etag} video={video} />
    )
    return (
        <ul className="col-md-12 list-group">
            {VidelItems}
        </ul>
    )
}

export default VidelList;