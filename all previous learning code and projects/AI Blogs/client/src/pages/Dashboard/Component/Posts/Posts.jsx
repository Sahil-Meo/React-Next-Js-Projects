import React from 'react'
import DashboardPostEditor from './Component/PostEditor'
import BreadCrumbs from '../../../../components/BreadCrumbs'

const Posts = () => {
  return (
    <div className='flex flex-col gap-4'>
      <BreadCrumbs />
      <DashboardPostEditor />
    </div>
  )
}

export default Posts
