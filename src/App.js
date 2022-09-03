import { useState  } from 'react';

import './App.css';
import Main from './components/Dashboard/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [selectedMenu, setSelectedMenu] = useState(3);


  

  return (
    <div className="flex w-full min-h-screen font-sans bg-[#FFFFFF] dark:bg-gray-800">
     <Sidebar setSelectedMenu={setSelectedMenu}/>

<>
{selectedMenu === 3 ? <Main />: ""}
</>


      

    </div>
  );
}

export default App;
