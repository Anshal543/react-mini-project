import React from 'react'
import { useState } from 'react'

const AddVideo = ({addVideo}) => {


    const [video,setVideo] = useState({
        id:"",
        img: 'https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg',
        profile: 'https://yt3.ggpht.com/yti/APfAmoFw3Zr7fFp3d1B3GJ9zQfDQc5YjxQ6Lz6q3JQ=s88-c-k-c0x00ffffff-no-rj-mo',
        title: 'The Best of Mozart',
        channel: 'HALIDONMUSIC',
        views: '3.6M',
        time: '3 years ago',
        verified: true
    })
    function handleVideo(){
      const randomId = Math.floor(Math.random()*200)
      setVideo({...video,id:randomId})
        addVideo(video)
    }

  return (
    <div>
        <button onClick={handleVideo}>Add Video</button>
    </div>
  )
}

export default AddVideo