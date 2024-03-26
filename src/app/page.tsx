"use client"
import { RxCrossCircled } from "react-icons/rx";
import { RiEditCircleLine } from "react-icons/ri";
import { useState } from "react";

export default function Home() {
  // define State
  const [todos, setTodos] = useState([{ task: "Make a JS file", id: 1 }, { task: "Start learning Next Js", id: 2 }, { task: "Go for Walk", id: 3 }])

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState(0);
  console.log(inputVal, id)

  // Functions

  const addItems = () => {
    let obj: any = todos.find(item => item.id == id)
    if (obj) {
      let newarray = todos.filter(item => item.id !== obj.id)
      setTodos([...newarray, { task: inputVal, id: id }])
      setInput("")
      setId(0)
      return
    }

    setTodos([...todos, { task: inputVal, id: id }])
    setInput("")
    setId(0)
  }



  const editItem = (id: any) => {
    let obj: any = todos.find(item => item.id == id)
    setId(obj.id)
    setInput(obj.task)
  }


  const delItem = (id: any) => {
    let newarray = todos.filter(item => item.id !== id)
    setTodos([...newarray])
  }


  return (
    // main div
    <div className="bg-white h-max flex items-center justify-center" >
      {/* Main box Div */}
      <div className="bg-blue-950 flex flex-col rounded-xl p-20 w-auto shadow-md m-8">
        {/* Header div */}
        <h1 className="text-left font-bold text-[30px] ml-2 text-white">Todo List.</h1>
        <span className="m-2">
          <hr />
        </span>
        {/* First input div */}
        <div className="flex justify-between m-2 gap-4">
          <input
            value={inputVal}
            onChange={(e) => setInput(e.target.value)}
            className="w-[70%] rounded-lg p-2 text-lg border-b focus:outline-none bg-gray-300 pl-5"
            type="text"
            placeholder="Enter your task" />

          <input
            type="number"
            value={id}
            onChange={(e: any) => setId(e.target.value)}
            placeholder="Id"
            className="w-[10%] rounded-lg p-2 text-lg border-b focus:outline-none bg-gray-300" />

          <button onClick={addItems} className="w-[20%] bg-gray-500 text-white rounded-lg p-2 text-lg font-bold hover:bg-gray-600">Add Task</button>
        </div>
        {/* your task heading */}
        <h1 className="text-center text-[25px] p-2 m-1 font-bold text-white">Your Tasks!</h1>
        {/* task List */}
        {
          todos.map((item: any, i: any) => {
            return (
              <div className="bg-gray-300 mt-2 p-1 rounded-lg" key={i}>
                {/* task list items */}
                <div className="flex justify-between">
                  <span className="font-bold mt-3 rounded-full h-8 w-8 text-center p-1 text-xl">{i + 1}</span>
                  {/* task name */}
                  <div className="text-[25px] mt-3">{item.task}</div>
                  {/* end buttons */}
                  <div className="text-[30px] mr-1 cursor-pointer">
                    <span onClick={() => delItem(item.id)}><RxCrossCircled /></span>
                    <span onClick={() => editItem(item.id)}><RiEditCircleLine /></span>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}
