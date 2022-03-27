import React, { forwardRef } from 'react'
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from '@material-ui/icons/';
import './videocard.css'

const VideoCard = forwardRef(({ movie }, ref) => {
    console.log("movie", movie)
    const base_url = "https://image.tmdb.org/t/p/original/";


    return (
        <>
            <div ref={ref} className="video__card max-w-sm rounded transform hover:scale-105 transition-all overflow-hidden cursor-pointer" style={{height : "350px"}} >
                <img className="w-full h-56 object-cover" src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt={"title"} />
                <div className="px-1 py-4 text-white">
                    <TextTruncate
                        className="text-xs text-gray-200"
                        line={1}
                        element="p"
                        truncateText="..."
                        text={movie.overview}
                    />
                    <div className="font-bold text-xl my-0.5">{movie.title || movie.original_name}</div>
                    <h5>
                        <div className="text-sm flex items-center justify-between gap-3">
                            {movie.media_type && `${movie.media_type} . `}
                            {movie.release_date || movie.first_air_date}
                            <div className="flex items-center gap-4">
                                <ThumbUpSharp />
                                {movie.vote_count}
                            </div>
                        </div>
                    </h5>
                </div>
            </div>
        </>
    )
})

export default VideoCard
