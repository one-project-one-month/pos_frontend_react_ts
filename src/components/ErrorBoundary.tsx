import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const ErrorBoundary = () => {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <ErrorMessageComponent title='404' description='Oops! The page you requested could not be found.' />
            )
        }

        if (error.status === 401) {
            return (
                <ErrorMessageComponent title='Unautherized' description='Oops! You are not authorized to see this' />

            )
        }

        if (error.status === 503) {
            return <div>Looks like our API is down</div>;
        }

        if (error.status === 418) {
            return <div>🫖</div>;
        }
    }

    return (
        <ErrorMessageComponent title='Something went wrong' />
    )
}

const ErrorMessageComponent = ({ title, description }: { title: string, description?: string }) => {
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-gray-600 my-3'>{description}</p>
            <Link to="/" className='w-fit flex bg-black text-white p-2 rounded'>
                <ArrowLeft className='mr-2' />
                <p>Go back</p>
            </Link>
        </div>
    )
}

export default ErrorBoundary