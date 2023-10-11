import React from 'react'
import { ShoppingCartSimple } from '@phosphor-icons/react/dist/ssr/ShoppingCartSimple';

export default function Header() {
    return (
        <section id='header'>
            <header className='flex justify-between items-center px-14 py-6 bg-white z-50 relative'>
                <img src="/logo.png" alt="logo" width={75} height={75} />
                <div className='flex gap-10 items-center'>
                    <div className='flex gap-16 text-[17px]'>
                        <a href="/">Home</a>
                        <a href="/">Partneships</a>
                        <a href="/">About</a>
                        <a href="/">Sewa Lapangan</a>
                    </div>
                    <div className='flex gap-10 items-center text-[17px] '>
                        <a href="/">
                            <ShoppingCartSimple size={32} />
                        </a>
                        <div className='w-[2px] h-[32px] bg-[#7C7C7C70]'></div>
                        <button>Masuk</button>
                        <button className='bg-[#3B96A9] px-6 py-2 rounded-lg text-white'>Daftar</button>
                    </div>
                </div>
            </header>
        </section>
    )
}
