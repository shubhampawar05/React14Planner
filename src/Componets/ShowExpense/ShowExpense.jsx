import React, { useContext } from 'react'
import { Context } from '../Context/Contex';
const ShowExpense = () => {
    const {data ,setData , setExpence}= useContext(Context)
    function onclickHandler(e){
          const filteredData = data.filter((items)=>items.title != e.title)
          setData(filteredData);
          setExpence((pre)=>pre-e.cost)
    }
  return (
    <div className='w-full '>
        <section className='max-w-screen-xl mx-auto'>
            <div>
                <h1 className='text-4xl font-semibold py-4'>Expenses</h1>
               {data.length > 0 ? <div>
                {
                    data.map((e)=>(
                        <div className='flex justify-between shadow-md w-full mt-4 px-4 py-2 '>
                            <p>{e.title}</p>
                           <div className='flex gap-4 px-4'>
                           <p>{e.cost}</p>
                            <button onClick={()=>onclickHandler(e)}>X</button>
                           </div>
                        </div>
                    ))
                }
               </div> : <div className='text-green-500 font-semibold text-3xl'>Add Data To List . . . . .</div>}
              
            </div>
            
        </section>
    </div>
  )
}

export default ShowExpense