// re-useable component
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaAngleRight } from "react-icons/fa";
const Feature = ({ img, flexDirection, background, responsiveDirection, heading }) => {
    return (
        <div className={`p-3 my-8 flex flex-col items-center gap-5 ${flexDirection ? 'md:flex-row-reverse' : 'md:flex-row'} ${background ? 'bg-gray-100' : ''}`}>
            {/* this is for text  */}
            <div>
                <div>
                    <SectionTitle
                        h1={heading}
                        bg={false}
                        padding={'py-1'}
                    />
                    <SectionTitle
                        p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        bg={false}
                        padding={'py-2'}
                    />
                </div>
                <div className='flex gap-4 items-center'>
                    <FaAngleRight size={22} />
                    <SectionTitle
                        p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        bg={false}
                        padding={'py-1'}
                    />
                </div>
                <div className='flex gap-4 items-center'>
                    <FaAngleRight size={22} />
                    <SectionTitle
                        p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        bg={false}
                        padding={'py-1'}
                    />
                </div>
            </div>

            {/* this is for image */}
            <div>
                <img className='w-[470px]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Feature;