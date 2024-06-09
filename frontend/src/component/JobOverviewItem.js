import React from 'react'

const JobOverviewItem = ({ icon, title, data }) => {
    return (
        <div className=' flex flex-col gap-1'>
            <div>{icon}</div>
            <div className=' uppercase text-gray-500'>{title}</div>
            <div className=' font-semibold'>{data}</div>
        </div>
    )
}

export default JobOverviewItem
