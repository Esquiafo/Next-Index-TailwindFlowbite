import { useTheme } from 'next-themes'
import React, { useState, useEffect } from "react";
import { Button} from '@fluentui/react-components';
import {WeatherSunny24Filled,WeatherMoon24Filled, PeopleCheckmark24Filled, TaskListSquareLtr24Regular, Home24Regular, ArrowAutofitDown24Regular, BookContacts24Regular } from '@fluentui/react-icons';


export default function BigNav() {
    const { theme, setTheme } = useTheme();
    const [dark, darkTheme] = useState('show');

    const [ light, lightTheme] = useState('hidden');
  
  function inverted() {
    theme === 'light' ? darkTheme('show') : darkTheme('hidden')
    theme === 'light' ? lightTheme('hidden') : lightTheme('show')
    
  }
  useEffect(() => {
    inverted()
  });
    return(
     
   <div style={{textAlign: 'center'}} className="inline-block">

    <Button  style={{width: '125px', height: '35px'}}  appearance="transparent" icon={<Home24Regular /> }>
        <p >Index</p>
    </Button>
    
   <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" icon={<ArrowAutofitDown24Regular /> }>
        Categories
    </Button>
    
   <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" icon={<PeopleCheckmark24Filled /> }>
        Profile
    </Button>
    
   <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" icon={<BookContacts24Regular /> }>
        Contact
    </Button>
    
   <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" icon={<TaskListSquareLtr24Regular /> }>
        FAQ
    </Button>
    
   <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" onClick={function(event){ setTheme(theme === 'light' ? 'dark' : 'light')}} icon={dark== 'show' ? <WeatherMoon24Filled /> : <WeatherSunny24Filled />}>
           Dark Mode
    </Button>

    <form>   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
               <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
               <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
    </form>
   </div>

        
    )
}
