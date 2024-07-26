import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import clogo from './assets/C-removebg.png'
import './App.css'
import { getDate,getMonth,getDay } from './components/Time'
import { v4 as uuidv4 } from 'uuid'; 
import toast, { Toaster } from 'react-hot-toast';




function App() {
  const [todo, settodo] = useState([{
    id: "",cat: "",desc : ""
  }])

  
  
  let inputRef = useRef('')
  let slRef = useRef('')
  const [todos, settodos] = useState([])
  
  let c = document.getElementById("Input")
  
  function handleAdd(){

    if(c.value == ""){
      toast.error("Add Something",{
        style:{
          fontFamily: "Montserrat",
          fontWeight:"bold"
        }
      })

    }
    else{
      settodo({
        id: uuidv4(),
        cat: slRef.current.value,
        desc : inputRef.current.value
      })
      settodos([...todos,{
        todo
      }])
      settodo("")
      
      let b =  document.getElementById("catagory")
      c.value = ''
      b.value = ''
      
  
    }
      }


  function handleEdit(e,id){
    if(c.value === ""){
    let t = todos.filter((item)=>{
      return item.todo.id == id
    })

    let d = t[0]
    let cat1 = document.getElementsByClassName("www")[0] 

    for (let i = 0; i < 4; i++) {
      let b =  document.getElementById("catagory")
      if(cat1.innerHTML == b[i].value){
       
        b.value = cat1.innerHTML

        settodo({
          id : id,
          cat : b.value,
          desc : d.todo.desc
        })

      }
      
    }
    
    let newTodos = todos.filter(item=>{
      return item.todo.id !== id
    })
    settodos(newTodos)
  }
  else{
    
    toast.error("Complete the Editing of todo You are currently Editing",{
      style:{
        fontFamily: "Montserrat",
        fontWeight:"bold"
      }
    })
  }
    
    
    
  }
  function handleremove(id,e){
    let newTodos = todos.filter(item=>{
      return item.todo.id !== id
    })
    settodos(newTodos)
  }

  function handleChange(e){
  let b =  document.getElementById("catagory")
    
    settodo({
      id:uuidv4(),
      cat: b.value,
      desc:e.target.value})
  }
  function handleChangeSel(e){
  let b =  document.getElementById("catagory")
    
    settodo({
      id:uuidv4(),
      cat: e.target.value,
      desc:inputRef.current.value})
  }

  
  return (
    <>
    <div className="body">
    <div className="container">
      <div className="dateTime">
      <h1>{getDay()} {getDate()},<span className='month'> {getMonth()}</span></h1> 
      </div>
      <div class="text-box-container">
      <select onChange={handleChangeSel} ref={slRef} id='catagory' required>
  <option value="" disabled selected>Catogary</option>
  <option value="Fitness">Fitness</option>
  <option value="Work">Work</option>
  <option value="Personal">Personal</option>
</select>
    <div className="wrapper">
    <input ref={inputRef} onChange={handleChange} value={todo.desc}  type="text" id='Input' placeholder="Enter Text"/>
    <button onClick={handleAdd} className='btn'>+</button>
    </div>
</div>

    <div className="mainTodo">
      <div className="lefticon"></div>
      <div className="Todo">

        {todos.length === 0 && <div className='NothinghereText'>No todos to display Here ...</div>}
        <div className='catagory'>
         

        {todos.map((item)=>{

       
          return <div key={item.todo.id} className="bom2">
          <p className='www'>{item.todo.cat}</p>
          <hr className='blurLine1'/>
          </div>
          })}
          </div>
        <div className="desc">
          {todos.map(((item)=>{
            
         
         return  <div key={item.todo.id} className="bom">
         <div className="item"> <p>{item.todo.desc}</p>
         <div className="btnss"><button className='btnEdit' onClick={(e)=>{handleEdit(e,item.todo.id)}}><svg className='editSvg' xmlns="#" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24"> <path d="M14.5 5.5L3 17 3 21 7 21 18.5 9.5zM21.2 2.8c-1.1-1.1-2.9-1.1-4 0L16 4l4 4 1.2-1.2C22.3 5.7 22.3 3.9 21.2 2.8z"></path> </svg></button>
         <button name={item.todo.id} onClick={(e)=>{handleremove(item.todo.id,e)}} className='btnEdit'><svg className='delSvg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 24 24"> <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path> </svg></button>
         </div>
         </div>
         <hr className='blurLine2' />
         </div>
          
           }))} 
          
          
        
        </div>
      </div>
    </div>
    </div>
    </div>
    <Toaster/>
    </>
  )
}


export default App
