import React, { FC } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { Skills } from '../interfaces/skills'

export interface SkillsListProps
{
    // Define your prop types here
    data : Skills
}

const SkillsList: FC<SkillsListProps> = ({data}) => {
    return (
        <div className='skills-list' >
            <h6 className='skills-list__title'>{data.title}</h6>
            <ul className='skills-list__items'>
                {data.skillsList.map((skillItem) => (
                    <li className='skills-list__item flex-column'>
                        <div className='d-flex justify-content-between'>
                            <span className='skills-list__item__name'>{skillItem.name}</span>
                            <span className='skills-list__item__percent'>{skillItem.percent}%</span>
                        </div>
                        <ProgressBar variant="success" now={skillItem.percent} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkillsList


