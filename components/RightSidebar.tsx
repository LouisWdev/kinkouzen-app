import React from 'react'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
       <section className='flex flex-col pb-8'>
          <div className='profile'></div>
       </section>
    </aside>
  )
}

export default RightSidebar