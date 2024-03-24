import React, { useContext } from 'react'
import { Context } from '../Context/Contex';
const Budget = () => {
    const {expense} = useContext(Context)
    console.log(expense);
    const budget =2000;
  return (
    <div>
        <section className='w-full '>
            <div className='max-w-screen-xl mx-auto py-8 px-4'>
                <h1 className='text-4xl font-semibold py-2'>My Budget Planner</h1>
                <div className='flex justify-between px-4 font-semibold my-4'>
                    <span className='text-xl py-4 px-4 rounded-xl  border-2 '>Budget: Rs.{budget}</span>
                    <span className='text-xl py-4 px-4 rounded-xl border-2 text-green-300'>Remaining: Rs.{budget-expense}</span>
                    <span className='text-xl py-4 px-4 rounded-xl  border-2 bg-blue-300'>Spant so far:{expense}</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Budget