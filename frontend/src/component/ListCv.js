import React from 'react'
import { Input } from 'antd';
import CvItem from './CvItem'

const { Search } = Input;
const ListCv = () => {
    const data = [
        {
            userImage: 'https://i.pinimg.com/236x/29/c3/20/29c3201174e3c76151a1ba47432dd9b8.jpg',
            userName: 'Nguyet Lee',
            jobLevel: 'UXUI Designer',
            phoneNumber: '0123456789',
            companyImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDf5TOy1BLHTd4XHKHbSeKyYmr82upgnb8Q&s',
            experience: '4 years',
            companyLocation: 'Ha Noi'
        },
        {
            userImage: 'https://i.pinimg.com/236x/29/c3/20/29c3201174e3c76151a1ba47432dd9b8.jpg',
            userName: 'Nguyet Lee',
            jobLevel: 'UXUI Designer',
            phoneNumber: '0123456789',
            companyImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDf5TOy1BLHTd4XHKHbSeKyYmr82upgnb8Q&s',
            experience: '4 years',
            companyLocation: 'Ha Noi'
        },
    ]
    return (
        <div className=' w-9/12 h-screen flex flex-col gap-4 items-start' style={{ padding: '10px 50px' }}>
            <div className=' text-2xl font-semibold'>List CV</div>
            <Search
                placeholder="Search by: Name, Mail, Position, Keyword..."
                size='large'
                styles={{ height: 72, borderRadius: 8 }}
            />
            <div className=' flex flex-col justify-between items-center gap-4 w-full'>
                {data?.map(item => <CvItem userCvData={item} />)}
            </div>
        </div>
    )
}

export default ListCv
