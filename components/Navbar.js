import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {

    return (
        
        <>
            <Head>
                <title>The Pokemon App</title>
            </Head>
            <header className="text-gray-600 mb-5">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                   <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/pokemon.png" height={90} width={120} />
                        <span className="ml-3 text-xl">The Pokemon App</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
                        
                    </nav>     
                </div>
            </header>
        </>
    )
}

export default Navbar;