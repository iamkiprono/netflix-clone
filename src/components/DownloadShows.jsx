import React from 'react'

const DownloadShows = () => {
  return (
    <div>
    <div className="flex items-center justify-center sm:flex-row gap-10 flex-col  px-5 py-20 ">
      <div>
        <img
        className="w-96"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
      </div>
      <div className="w-[340px] text-center">
        <p className="text-5xl font-bold my-4">Download your shows to watch offline</p>
        <p>
        Save your favorites easily and always have something to watch.
        </p>
      </div>
    </div>
  </div>
  )
}

export default DownloadShows