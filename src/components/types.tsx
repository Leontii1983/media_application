import React, {ChangeEventHandler, FormEventHandler, ReactElement, SyntheticEvent} from "react";

export type MediaItemProps =  {
    id: number;

    title: string;

    type: string;

    genre: string;

    releaseYear: number;

    rating: number;
    remove?: (arg0: number) => void;
}

export type MediaListProps = {
    items: MediaItemProps[];
    title: string;
    remove: (arg0: number) => void;
}

export type ButtonProps = {
    children: string;
    onClick: FormEventHandler;
}

export type InputProps = {
    type: string;
    placeholder: string;
    value: string | number;

    onChange: ChangeEventHandler;
}

export type Option = {
    value: string;
    name: string;

}
export type SelectProps = {
    options: Array<Option>;
    defaultValue: string;
    value: string,
    onChange: (value: string) => void;
}
export type MediaFormProps = {
    create: (arg0: MediaItemProps) => void;

}

export type FilterProps = {
    sort: string;
    query: string;
}
export type MediaFilterProps = {
    filter: FilterProps;
    setFilter: any;
}

export type ModalProps = {
    children: ReactElement
}