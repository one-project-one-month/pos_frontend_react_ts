import { ShieldAlert } from 'lucide-react';
const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <ShieldAlert size={70} color='red' />
            <p className='text-red-600 text-2xl'>Page not found</p>
        </div>
    )
}

export default NotFound