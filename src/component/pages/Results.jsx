import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import VideoCard from './VideoCard'
import FlipMove from 'react-flip-move'

const Results = ({ selectedOption }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(selectedOption);
            setMovies(response.data.results);
        }
        fetchData()
    }, [selectedOption])

    return (
        <>
            <div className="flex justify-center my-7 z-10">
                <FlipMove className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-6 lg:mx-0 max-w-6xl">
                    {
                        movies.map((movie) => {
                            return (<>
                                <VideoCard
                                    key={movie.id}
                                    movie={movie}
                                />
                            </>)
                        })
                    }
                </FlipMove>
            </div>
        </>
    )
}

export default Results
