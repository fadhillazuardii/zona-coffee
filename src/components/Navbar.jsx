import React, {useState} from 'react'
import {Menu, X, ShoppingCart} from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({ cartCount = 0 }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className=' bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        <div className='flex items-center'>
          <h1 className='text-2xl text-white'>Zona Coffee</h1>
        </div>
        {/* menu section */}
        <nav className='md:flex hidden items-center gap-7'>
          <ul className='flex gap-7 items-center text-xl font-semibold text-white'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <a href="/"><li className='cursor-pointer'>Menu</li></a>
            <a href="/"><li className='cursor-pointer'>About</li></a>
            <a href="/"><li className='cursor-pointer'>Testimonial</li></a>
          </ul>
          <a href="#contact"><button className='bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md'>Contact</button></a>
        </nav>

        <div className="relative cursor-pointer text-white hover:text-amber-200 transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold'>
                {cartCount}
              </span>
            )}
          </div>
        {
          open ? <X onClick={() => setOpen(false)} className='text-white w-7 h-7 md:hidden' /> : <Menu onClick={() => setOpen(true)} className='text-white w-7 h-7 md:hidden' />
        }
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Navbar
