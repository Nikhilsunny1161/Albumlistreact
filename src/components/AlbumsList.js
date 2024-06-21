import React from 'react'
import Navbar from './Navbar'
import List from './List'

//get all albums list from app and then call list component for each list on the albums
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar page="Add new Album" path="/add-album" />

      <div className='albums-list'>
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}
export default AlbumsList
