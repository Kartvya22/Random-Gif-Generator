
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full h-auto flex flex-col items-center gap-16 py-10'>
      <h1 className='bg-white  w-[85%] text-center py-2 rounded-md font-bold text-2xl shadow-md shadow-black'>RANDOM GIFs</h1>
      <div className=' w-full h-full flex flex-col items-center gap-20 '>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
