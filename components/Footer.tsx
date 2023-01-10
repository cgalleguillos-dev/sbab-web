import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            NOSE™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 hover:text-font-primary"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 hover:text-font-primary"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 hover:text-font-primary"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-font-primary">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
