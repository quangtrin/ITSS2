import React from 'react'
import JobOverviewItem from './JobOverviewItem'
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsStack } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

const DetailJob = () => {
    const job = {
        title: 'UXUI',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s',
        jobType: 'FULL-TIME',
        salary: '20000',
        postedTime: '2024-6-2',
        expiry: '2024-6-2',
        location: ' Hanoi',
        level: ' Entry Level',
        desciption: `Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.`,
        requirements: `Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on
3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications
Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel
Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)
Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.
Familiarity with version control and project management systems (e.g., Github, Jira)
Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on
Ambitious and hungry to grow your career in a fast-growing agency`

    }
    return (
        <div className=' w-9/12 flex flex-col gap-4' style={{ padding: '10px 50px' }}>
            <div className=' text-2xl font-semibold'>Detail Job</div>
            <div className=' flex justify-between items-center'>
                <div className=' flex gap-2'>
                    <img src={job.image} className=' w-[100px]' />
                    <div className=' flex flex-col gap-2'>
                        <div className=' text-2xl font-semibold'>{job.title}</div>
                        <div className=' bg-green-600 rounded-[3px] text-white px-2'>{job.jobType}</div>
                    </div>
                </div>
                <div className=' bg-blue-800 rounded text-white py-4 px-6 flex gap-2 items-center' >
                    <span>Apply now</span>
                    <FaArrowRight />
                </div>
            </div>
            <div className=' flex justify-between gap-4 '>
                <div className=' flex flex-col gap-4 flex-1'>
                    <div>
                        <span className=' font-semibold text-xl'>Job Description</span>
                        <div>{job.desciption}</div>
                    </div>
                    <div>
                        <span className=' font-semibold text-xl'>Requirements</span>
                        <div>{job.requirements}</div>
                    </div>
                </div>
                <div className=' flex flex-col gap-4 w-2/5 flex-none'>
                    <div className='flex border-2 border-blue-100 justify-between rounded-lg'>
                        <div className=' flex flex-col flex-1 justify-center items-center p-8 '>
                            <div className=' font-semibold'>Salary(USD)</div>
                            <div className=' text-2xl text-green-700'>{`$${job.salary}`}</div>
                            <div className=' text-xs text-gray-600'>Yearly salary</div>
                        </div>
                        <div className=' flex flex-col flex-1 justify-center items-center  p-8'>
                            <FaMap className=' text-blue-800 font-semibold' size={32} />
                            <div className=' font-semibold'>Job Location</div>
                            <div className=' text-xs text-gray-600'>{job.location}</div>
                        </div>
                    </div>
                    <div className=' flex flex-col border-2 border-blue-100 rounded-lg p-8 gap-5'>
                        <div className=' font-semibold'>Job Overview</div>
                        <div className='grid grid-cols-3 justify-between gap-5'>
                            <JobOverviewItem
                                icon={<MdOutlineCalendarToday className=' text-blue-800' size={32} />}
                                title={'job Posted'}
                                data={job.postedTime}
                            />
                            <JobOverviewItem
                                icon={<FiClock className=' text-blue-800' size={32} />}
                                title={'Job expire in:'}
                                data={job.postedTime}
                            />
                            <JobOverviewItem
                                icon={<BsStack className=' text-blue-800' size={32} />}
                                title={'Job Level:'}
                                data={job.postedTime}
                            />
                            <JobOverviewItem
                                icon={<FaWallet className=' text-blue-800' size={32} />}
                                title={'Experience'}
                                data={job.postedTime}
                            />
                            <JobOverviewItem
                                icon={<BsFillBriefcaseFill className=' text-blue-800' size={32} />}
                                title={'Education'}
                                data={job.postedTime}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailJob
