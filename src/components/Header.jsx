import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className="flex border-b-4 border-primary items-center justify-between px-10 py-2">
      <section>
        <Link to="/">
          <img className="h-8" src="./firmadox.png" alt="Mi imagen" />
        </Link>
      </section>
      <section className="flex ">
        <a href="https://canary-web.albertcs.com/auth?redirect=https://rvtfaoagile.vercel.app/"
          className="flex p-2 border border-primary hover:border-phover items-center justify-between rounded-lg text-gray-500 hover:text-gray-600"
        >
          <UserCircleIcon  className="h-6 w-6" />
          <span className="mb-0.5">Acceder</span>
        </a>
      </section>
    </header>
  )
}

export default Header
