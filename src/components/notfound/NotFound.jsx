import React from 'react'
import notFound from '../../assets/images/error.webp'



export default function NotFound() {
    return (
      <div className="text-center">
        <img src={notFound} alt="Page not found" className="mx-auto w-30" />
        <h2 className="mt-4">Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  }