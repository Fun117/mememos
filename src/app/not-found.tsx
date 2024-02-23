import { Metadata } from 'next';
import Link from 'next/link'

export const metadata:Metadata = {
    title: '404'
}

export default function NotFound() {
    return (
        <>
            <div className='fixed flex flex-col justify-center items-center w-full h-full'>
                <h1 className='font-bold text-3xl'>404</h1>
                <p>Could not find requested resource</p>
                <Link className='text-sky-600 hover:text-sky-700 active:text-sky-800 transition duration-200' href="/">Return Home</Link>
            </div>
        </>
    )
}