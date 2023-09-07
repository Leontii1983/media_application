import React, {ChangeEvent} from 'react';
import Input from "../UI/Input/Input";
import {MediaFilterProps} from "../types";


const MediaFilter = ({filter, setFilter} : MediaFilterProps) => {

    return (
        <Input
            type="text"
            placeholder="Search"
            value={filter.query}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})} />

    );
};

export default MediaFilter;