// Import Library
import { Fragment, useState } from 'react';

// Import Component
import Input from '../components/input';

// Import Assets
import BackgroundUmbrella from '../assets/images/bg-umbrella.png';
import IconCalendar from '../assets/icons/ic-calendar.svg';
import IconClose from '../assets/icons/ic-close.svg';
import IconLocation from '../assets/icons/ic-location.svg';

export default function Home() {

    const [getSelectedPayment, setSelectedPayment] = useState(0);

    const [getValueAddress, setValueAddress] = useState('');
    const [getValueNote, setValueNote] = useState('');

    const listPayment = ['Cash', 'Credit Card', 'eWallet/Virtual bank'];

    return (
        <Fragment>
            <main className='flex justify-center h-screen md:h-full md:pb-[101px] md:pt-[91px] w-screen'>
                <div className='bg-white md:block flex flex-col h-full md:h-auto max-w-[800px] overflow-hidden relative md:rounded-[20px] w-full'>
                    <div className='bg-[#262626] flex justify-between items-center px-6 md:px-10 py-8'>
                        <p className='font-bold leading-6 md:leading-[35px] text-lg md:text-[26px] text-white'>Choose the form of payment</p>
                        <div className='cursor-pointer h-6 relative w-6'>
                            <img src={IconClose} height={24} width={24} alt="Close" />
                        </div>
                    </div>
                    <div className='flex-1 overflow-auto p-[24px_32px_36px] relative'>
                        <div className='bg-[#F7FAFC] border-[#D3DEE9] border-[1px] flex flex-col md:flex-row md:items-center gap-5 rounded-[20px] p-5 md:p-[25px]'>
                            <div className='flex flex-1 gap-5'>
                                <div className='bg-[#EDF2F7] flex justify-center items-center p-[13px_24px_18px_26px] md:p-[13px_30px_22px_31px] rounded-full'>
                                    <p className='font-bold leading-6 md:leading-[35px] text-lg md:text-[26px] text-black'>J</p>
                                </div>
                                <div className='flex-1 relative'>
                                    <p className='font-bold leading-6 md:leading-[35px] text-lg md:text-[26px] text-black'>John</p>
                                    <p className='mt-[10px] text-[#1a1b1c] text-sm md:text-base'>(88) 99602-2404</p>
                                </div>
                            </div>
                            <button type='button' className='bg-[#EDF2F7] font-semibold leading-[22px] px-[21px] py-3 rounded-[10px] text-base text-black'>
                                Log out
                            </button>
                        </div>
                        <p className='font-semibold leading-[30px] mt-[30px] text-[22px] text-black'>Selected service</p>
                        <div className='bg-white border-[#D3DEE9] border-[1px] flex flex-row gap-5 items-center mt-5 p-[20px_16px_24px] md:p-[28px_25px_35px] relative rounded-[20px]'>
                            <div className='h-[70px] overflow-hidden relative rounded-[12px] w-[70px]'>
                                <img src={BackgroundUmbrella} height={70} width={80} alt="Umbrella" />
                            </div>
                            <div className='flex flex-1 gap-2 flex-col md:flex-row relative'>
                                <div className='flex-1 relative'>
                                    <p className='font-bold leading-6 md:leading-[30px] text-lg md:text-[22px] text-black'>Japanese lessons</p>
                                    <div className='flex gap-[10px] items-center mt-4 relative'>
                                        <div className='h-4 relative w-4'>
                                            <img src={IconCalendar} height={16} width={16} alt="Calendar" />
                                        </div>
                                        <p className='leading-[20px] text-[#718096] text-xs md:text-sm'>Dec 2, 2020 · 11:00 · 1 month</p>
                                    </div>
                                    <div className='flex gap-[10px] items-center mt-[5px] relative'>
                                        <div className='h-4 relative w-4'>
                                            <img src={IconLocation} height={16} width={16} alt="Close" />
                                        </div>
                                        <p className='leading-[20px] text-[#718096] text-xs md:text-sm'>Client`s place</p>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <p className='font-bold leading-6 md:leading-[30px] text-lg md:text-[22px] md:text-end text-black'>Rp 1.350.000</p>
                                </div>
                            </div>
                        </div>
                        <Input title='Enter your location' classNameContainerAdditional='mt-6 md:mt-[30px] w-full' classNameInputAdditional='w-full' classNameTitle='font-semibold leading-6 md:leading-[30px] text-lg md:text-[22px] text-black' placeholder='Enter address' value={getValueAddress} onChange={e => setValueAddress(e?.target?.value)} />
                        <Input title='Enter your location' classNameContainerAdditional='mt-6 md:mt-[30px] w-full' classNameInputAdditional='w-full' classNameTitle='font-semibold leading-6 md:leading-[30px] text-lg md:text-[22px] text-black' placeholder='Enter text here' value={getValueNote} onChange={e => setValueNote(e?.target?.value)} />
                        <div className='mt-6 md:mt-10 relative'>
                            <p className='font-bold leading-8 md:leading-[44px] text-2xl md:text-[36px] text-black'>Choose a way to pay</p>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 items-center mt-6 md:mt-10'>
                                {(listPayment && listPayment?.length > 0) ? listPayment?.map((item, index) => {
                                    return (
                                        <div key={index} className={`${+getSelectedPayment === +index ? 'border-[#262626] border-[2px] bg-white' : 'bg-[#EDF2F7]'} flex flex-1 font-semibold items-center justify-center py-[18px] rounded-[12px]`} onClick={() => setSelectedPayment(index)}>
                                            <p className='md:leading-6 text-sm md:text-[18px] text-black text-center'>{item}</p>
                                        </div>
                                    )
                                })
                                    : null
                                }
                            </div>
                        </div>
                        <div className='flex gap-4 items-center mt-6 md:mt-10 relative'>
                            <input type="checkbox" id='terms-and-condition' />
                            <label htmlFor='terms-and-condition' className='leading-[22px] text-[#718096] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <span className='text-[#1E21FF] underline'>do eiusmod</span></label>
                        </div>
                    </div>
                    <div className='border-t-[1px] border-[#D3DEE9] flex items-center justify-between mt-6 md:mt-10 px-6 md:px-10 py-6 md:py-[35px]'>
                        <button type='button' className='font-[500] leading-[22px] text-base text-black'>Previous</button>
                        <button type='button' className='bg-[#1E21FF] font-semibold leading-6 p-[18px_56px] rounded-[12px] text-[18px] text-white'>Next</button>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
