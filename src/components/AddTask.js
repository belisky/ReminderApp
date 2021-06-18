 import {useState } from 'react'
 

const AddTask = ({onAdd}) => {
    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()


        if(!text){
            alert('please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setReminder(false)
        setDay('')

    }
   

    return (       

        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' 
                    placeholder='AddTask' 
                    value={text} 
                    onChange={ (e)=> setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day&Time</label>
                <input type='text' 
                    placeholder='Add Day & time' 
                    value={day} 
                    onChange={ (e)=> setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>SetReminder</label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e)=> setReminder(e.currentTarget.checked)}
                />
            </div>
            <input className='btn btn-block' type='submit' value='Save Task' 
                
            />
            
        </form>
    )
}

export default AddTask
