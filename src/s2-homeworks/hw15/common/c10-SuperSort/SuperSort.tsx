import React from 'react'
import upIcon from './sortIkons/sort-up-solid.svg'
import downIcon from './sortIkons/sort-down-solid.svg'
import noneIcon from './sortIkons/sort-solid.svg'

// добавить в проект иконки и импортировать
//поставили имена вверху

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
        if (sort === down) {
            sort = up;
        } else if (sort === up) {
            sort = '';
        } else {
            sort = down;
        }


        return sort;

    //return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon
    let opacity = icon === noneIcon ? "30%" : "100%"

    return (

        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width:"8px", marginLeft:"5px", opacity: opacity}}
            />
        </span>
    )
}

export default SuperSort
