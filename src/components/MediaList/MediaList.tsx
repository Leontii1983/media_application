import React from 'react';
import MediaItem from "../MediaItem/MediaItem";
import {MediaListProps} from "../types";
import {MediaListTitle} from "./MediaList.module";
import {MediaMessage} from "../../MediaApplication.module";

const MediaList = ({items, title, remove} : MediaListProps) => {
    if(!items.length) {
        return(
        <MediaMessage>Media not found</MediaMessage>
        )
    }
    return (
        <div>
        <MediaListTitle>{title}</MediaListTitle>
            {items.map(item =>
                <MediaItem remove={remove} {...item} key={item.id} />
            )}
        </div>
    );
};

export default MediaList;