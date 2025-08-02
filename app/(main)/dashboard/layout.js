import React, { Suspense } from 'react'
import DashboardPage from './page';
import { BarLoader } from 'react-spinners';

const DashboardLayout = () => {
  return (
    <div className='px-5'>
      <h1 className='text-6xl font-bold bg-gradient-to-br from-blue-700 to-green-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text mb-5'>Dashboard</h1>
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color='#9333ea' />}>
        <DashboardPage/>
      </Suspense>
    </div>
  )
}

export default DashboardLayout;
