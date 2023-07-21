import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"
import { ToggleButton } from "./ToggleButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">

        <Link 
          href='/'
          className="flex justify-center items-center"
        >
          <Image 
            src='/logo.svg'
            alt="Logo auto"
            width={118}
            height={18}
            className="object-contian dark:bg-white dark:rounded-full dark:py-3 dark:px-3"
          />
        </Link>
        <ToggleButton />
        <CustomButton 
          title="Iniciar sesión"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default Navbar