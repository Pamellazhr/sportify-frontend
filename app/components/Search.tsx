import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight'
import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin'
import React from 'react'

function Search() {
    return (
        <div className='z-50 w-[900px] mx-auto bg-white -translate-y-12 rounded-lg border border-[rgba(124,124,124,0.50)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-6 flex gap-14 items-center justify-between'>
            <div className='flex items-center gap-12'>

                <div className='flex gap-6 items-center'>
                    <MapPin size={60} weight='fill' className='bg-[#45A8AE] text-white p-3 rounded-lg ' />
                    <div>
                        <p className='text-xl font-medium'>Lokasi</p>
                        <select className='-translate-x-1'>
                            <option value="">Bandung</option>
                            <option value="">Jakarta</option>
                            <option value="">Surabaya</option>
                        </select>
                    </div>
                </div>
                <div className='w-[2px] h-[60px] bg-[#7C7C7C70]'></div>
                <div className='flex gap-6 items-center'>
                    <img src="/whistle.svg" alt="whistle" width={65} height={65} className='bg-[#45A8AE] text-white px-3 py-[18px] rounded-lg' />
                    <div>
                        <p className='text-xl font-medium'>Cabang Olahraga</p>
                        <select className='-translate-x-1'>
                            <option value="">Badminton</option>
                            <option value="">Sepak bola</option>
                            <option value="">Tenis</option>
                        </select>
                    </div>
                </div>
            </div>

            <button className='flex items-center gap-5 text-xl bg-[#45A8AE] text-white rounded-lg py-2 px-4'>
                <span>Temukan</span>
                <ArrowRight size={32} />
            </button>
        </div>
    )
}

export default Search