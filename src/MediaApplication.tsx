import React, {useEffect, useMemo, useState} from 'react';
import {AppWrapper} from "./MediaApplication.module";
import MediaList from "./components/MediaList/MediaList";
import MediaForm from "./components/MediaForm/MediaForm";
import {MediaItemProps} from "./components/types";
import Select from "./components/UI/Select/Select";
import MediaFilter from "./components/MediaFilter/MediaFilter";
import axios from "axios";


function MediaApplication() {
    const [items, setItems] = useState<any>([])

    const [selectedSort, setSelectedSort] = useState('');
    const [filter, setFilter] = useState({
    sort: '', query: ''
    })

    useEffect(()=>{
        fetchMedia();
    }, [])

    const fetchMedia = async () => {
        const response = await axios.get('http://localhost:5000/media');
        const {data} = await response;
        setItems(data);
    }


    const sortedMedia = useMemo(() => {
        if(filter.query) {
            const newMedia =items && items.filter((value:MediaItemProps) => value.title.toLowerCase().includes(filter.query.toLowerCase()))
            return newMedia
        }
        return items;
    }, [filter.query, items])

    const createMedia = (newMedia: MediaItemProps): void => {
        setItems([...items, newMedia]);
    }

    const deleteMedia = (id: number): void => {
        setItems(items.filter((i:MediaItemProps) => i.id !== id))
    }

    const sortMedia = (sort: string) => {
        setSelectedSort(sort);
        setItems(items.filter((obj: MediaItemProps) => Object.values(obj).some(el => el === sort)));

    }
    return (
    <AppWrapper>
        <MediaForm  create={createMedia} />
        <MediaFilter filter={filter} setFilter={setFilter} />
        <Select
            onChange={sortMedia}
            value={selectedSort}
            options={[
                {value: 'Game', name: 'Only game'},
                {value: 'Movie', name: 'Only movie'},
                {value: 'TV-show', name: 'Only tv-show'},
            ]}
            defaultValue="Sort by" />

         <MediaList remove={deleteMedia} title="Media list" items={sortedMedia} />

    </AppWrapper>
  );
}

export default MediaApplication;
