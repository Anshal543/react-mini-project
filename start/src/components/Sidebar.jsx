import React from 'react'
import { CiHome } from "react-icons/ci";
import { MdOutlineUnsubscribe } from "react-icons/md";
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
  return (
    <div className='bg-gray-600 w-[250px] flex flex-col h-screen'>

      <SidebarOptions  title="React" Img = {CiHome} />
      <SidebarOptions  title="React" Img = {MdOutlineUnsubscribe} />
      
        </div>
  )
}

export default Sidebar