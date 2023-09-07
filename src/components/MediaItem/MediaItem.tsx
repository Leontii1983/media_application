import React from 'react';
import {MediaContentWrapper, MediaItemWrapper, MediaList, MediaListLi, MediaListWrapper} from "./MediaItem.module";
import {MediaItemProps} from "../types";
import Button from "../UI/Button/Button";


const MediaItem = ({title, type, genre, releaseYear, rating, remove, id}: MediaItemProps) => {
    return (
        <MediaItemWrapper >
            <MediaContentWrapper>
                <span>{title}</span>
            <MediaListWrapper>
                <MediaList>
                    <MediaListLi>Type: {type}</MediaListLi>
                    <MediaListLi>Genre: {genre}</MediaListLi>
                    <MediaListLi>Year: {releaseYear}</MediaListLi>
                </MediaList>
            </MediaListWrapper>
            <span>Rating: {rating}</span>
            </MediaContentWrapper>
            <div>
                <Button onClick={() => remove && remove(id)}>Удалить</Button>
            </div>
        </MediaItemWrapper>
    );
};

export default MediaItem;