import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, SetAllowChar] = useState(false)
  const [psw, setPsw] = useState("")

  const pswGenerator = useCallback(()=>{
       let pass ="";
       let str = "ABCDEFGHIJKLMNONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       if(allowNum) str+="1234567890";
       if(allowChar) str+="!@#$%^&*()[]{}|<>?~`";
       
       for (let i = 0; i < length; i++) {
           let char = Math.floor(Math.random()*str.length+1)
           pass+=str.charAt(char);

       }

       setPsw(pass);   

  },[length,allowNum,allowChar,setPsw])

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(psw)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
  },[psw])

  useEffect(()=>{
    pswGenerator()
  },[length,allowChar,allowChar,pswGenerator])
   const passwordRef = useRef(null)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center'>Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={psw}
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          ref={passwordRef}
          readOnly />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label>Length({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={allowNum}
            className='cursor-pointer'
            onChange={
              ()=>{setAllowNum((prev)=>!prev)

               }} />
               <label htmlFor="allowNumber">
                Number
               </label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={allowChar}
            className='cursor-pointer'
            onChange={
              ()=>{SetAllowChar((prev)=>!prev)

               }} />
               <label htmlFor="allowChar">
                Character
               </label>

          </div>

        </div>
      </div>
    </>
      
  )
}

export default App
