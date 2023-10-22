'use client'

import React from 'react'
import { Song } from '@/types'
import SongItem from './SongItem'

interface PageContentPros {
    songs: Song[]
}

const PageContent: React.FC<PageContentPros> = ({songs}) => {
    if(songs.length === 0){
        return (
            <div className='mt-4 text-neutral-400'>
                No Songs avialable
            </div>
        )
    }
  return (
    <div className='
    grid
    gird-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-8
    gap-4 mt-4
    '>
    {songs.map((song)=>(
        <SongItem
        key={song.id}
        onClick={()=>{}}
        data={song}
        />
    ))}
    </div>
  )
}

export default PageContent
