import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <DocumentMagnifyingGlassIcon className='h-64 w-64 text-indigo-500'/>
        <h1 className='text-lg italic text-center text-black/50 font-bold'>
          Welcome to Amazon Web Scrapper
        </h1>
      </div>
   
    </div>
  )
}
