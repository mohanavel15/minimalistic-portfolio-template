import { CopyRight } from "../data/data";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full">
        <div className="h-2 w-full bg-gray-300 rounded-full my-6"></div>
        <div className="mb-6 text-base sm:text-xl text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {CopyRight}</p>
            <p>Built with ReactJS & TailwindCSS</p>
        </div>
    </footer>
  )
}
