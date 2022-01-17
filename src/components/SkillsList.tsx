import React, { FC } from 'react'
import { Skills } from '../interfaces/skills'

export interface SkillsListProps
{
    // Define your prop types here
    data : Skills
}

const SkillsList: FC<SkillsListProps> = ({data}) => {
    return (
        <div className='skills-list marginbottom-xxl' >
            <h6 className='skills-list__title'>{data.title}</h6>
            <ul className='skills-list__items'>
                {data.skillsList.map((skillItem) => (
                    <li className='skills-list__item'>
                        <span className='skills-list__item__name'>{skillItem.name}</span>
                        <span className='skills-list__item__percent'>{skillItem.percent}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsList


