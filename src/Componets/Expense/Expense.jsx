import React, { useContext, useRef } from 'react'
import { Context } from '../Context/Contex';
const Expense = () => {

    const {setExpence,setData} = useContext(Context)
    const textref = useRef();
    const costref = useRef();

    const onclickHandler=()=>{
        const title = textref.current.value;
        const cost = Number(costref.current.value);
        setData((prev)=> [...prev,{title:title, cost: cost }]);
        setExpence((pre)=>pre+cost);
        
    }
  return (
    <div className='w-full '>
        <section className='max-w-screen-xl mx-auto'>
            <div>
                <h1  className='text-4xl font-semibold py-4'>Add Expenses</h1>
                <div className='px-4 flex justify-between gap-8'>
                   <div className='w-1/2 py-4'>
                     <p className='py-2 text-2xl font-medium'>Name</p>
                    <input ref={textref} type="text" className='border w-full rounded  py-2 px-4' />
                    </div>
                    <div className='w-1/2 py-4'>
                     <p className='py-2 text-2xl font-medium'>Cost</p>
                    <input ref={costref} type="number" className='border w-full rounded py-2 px-4 ' />
                    </div>
                    <button onClick={onclickHandler}>add</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Expense