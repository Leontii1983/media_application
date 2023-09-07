import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {MediaFormProps} from "../types";


const MediaForm = ({create} : MediaFormProps) => {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        genre: '',
        releaseYear: 0,
        rating: 0
    })

    const addNewMedia = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const newMedia = {
            id: Date.now(),
            ...formData
        }
       create(newMedia);
        setFormData({
            title: '',
            type: '',
            genre: '',
            releaseYear: 0,
            rating: 0
        })
    }
    return (
        <form>
            <Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData,title: e.target.value })} value={formData.title}  type="text"  placeholder="title" />
            <Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData,type: e.target.value})} value={formData.type}  type="text" placeholder="type" />
            <Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData,genre:e.target.value})} value={formData.genre}  type="text" placeholder="genre" />
            <Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData,releaseYear: e.target.value as unknown as number})} value={formData.releaseYear}  type="text" placeholder="release year" />
            <Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({...formData, rating: e.target.value as unknown as number})} value={formData.rating}  type="text" placeholder="rating" />
            <Button onClick={(e: SyntheticEvent<HTMLFormElement, SubmitEvent>): void => addNewMedia(e)}>Create media</Button>
        </form>
    );
};

export default MediaForm;