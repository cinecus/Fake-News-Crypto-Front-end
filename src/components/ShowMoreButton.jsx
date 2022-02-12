import React from 'react'
import { useGlobalContext } from '../context'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
const ShowMoreButton = ({ type }) => {
    const { showMore } = useGlobalContext()
    return (
        <>
            <div className='columns is-justify-content-center mt-4 px-auto my-6'>
                <button className="button is-medium is-text" onClick={() => showMore(type)} ><span>Show more</span> <span className="p-1 mt-1"><IoIosArrowDropdownCircle /></span></button>
            </div>
        </>
    )
}

export default ShowMoreButton
