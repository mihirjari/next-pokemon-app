import Image from "next/image"
import Link from "next/link";

const Footer = () => {

    return (
        <>
            <footer className="text-gray-600 body-font mb-0">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src="/pokemon.png" height={90} width={120} />
                        <span className="ml-3 text-xl">The Pokemon App</span>
                        </a>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">&copy; {new Date().getFullYear()} Mihir Jariwala —
                        <Link href="https://mihir-jariwala.netlify.app"><a href="https://mihir-jariwala.netlify.app" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Visit</a></Link>
                    </p>
                    
                </div>
            </footer>

        </>
    )

}

export default Footer;