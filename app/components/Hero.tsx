import React from 'react'

function Hero() {
    return (
        <section id='hero'>
            <div className='h-[540px] bg-[linear-gradient(103deg,#3B96A9_0%,#3CA8AA_0.01%,rgba(59,150,169,0.80)_99.14%)] relative flex items-center px-36 overflow-hidden'>
                <div className='max-w-screen-xl mx-auto w-full'>
                    <h1 className='text-[4rem] font-medium text-white mb-4'>Neuron Sportify</h1>
                    <p className='text-white  text-[1.75rem]'>Jadikan Olahragamu semakain <br /> mudah dan menyenangkan</p>
                </div>
                <img src="/ring.png" alt="png" width={600} height={700} className='absolute right-0 -top-20' />

            </div>  
        </section>
    )
}

export default Hero