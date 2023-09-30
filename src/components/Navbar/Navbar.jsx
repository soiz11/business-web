import Link from 'next/link'
import React from 'react'

const links = [
  {
    id:1,
    title:"Dashboard",
    url:"/dashboard",
},
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio",
},
  {
    id:3,
    title:"Blog",
    url:"/about",
},
  {
    id:4,
    title:"About",
    url:"/about",
},
  {
    id:5,
    title:"Contact",
    url:"/contact",
},

]

const Navbar = () => {
  return (
    <div className='flex justify-between px-[5%] text-lg h-12
     bg-slate-50 items-center drop-shadow-md'>

      <div>
        <Link href="/">Astro</Link>
      </div> {/* logo */}

      <div className='flex gap-1'>
        {links.map((link)=>(
          <Link key={link.id} href={link.url} 
          className='px-4 py-1 hover:bg-slate-200 rounded transition duration-500'>{link.title}</Link>
        ))} 
      </div> {/* nav link set */}

    </div>
  )
}

export default Navbar