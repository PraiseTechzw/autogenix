import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='root'>

            <Sidebar/>
             <MobileNav/>


            <div className='root-container'>
                <div className='wrappper'>
                    {children}
                </div>
            </div>
            </main>
    )
}

export default Layout