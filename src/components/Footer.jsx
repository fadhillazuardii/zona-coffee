import React from 'react'

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div className='text-white'>
        <div className='bg-black/40 min-h-[400px]'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-3 pb-20 pt-5'>
                {/* company detail */}
                <div className='py-8 px-4'>
                    <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl'>Zona Coffe</a>
                    <p className='pt-4'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
                </div>
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                        <div>
                            <p className='mb-3'>South Jakarta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer