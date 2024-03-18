import { Link } from "react-router-dom";
import { Name, blogUrl, displayPicture } from "../data/data";

function Header() {
  return (
    <header className="min-w-full h-auto flex flex-col md:flex-row mb-8 items-center">
        <img className="rounded-full w-44" src={displayPicture} alt={Name} />
        <div className="h-auto w-full ml-10 flex flex-col">
            <Link to="/" className="text-xl md:text-4xl font-bold mt-6">{Name}</Link>
            <div className="min-h-2 w-14 md:w-24 bg-blue-600 rounded"></div>
            <div className="w-full flex flex-col md:flex-row gap-2 md:gap-4 mt-2">
                <Link to="/projects" className="header-btn">PROJECTS</Link>
                <Link to="/work" className="header-btn">WORK</Link>
                <Link to={blogUrl} className="header-btn">ARTICLES &#8599;</Link>
                <Link to="/contact" className="header-btn">CONTACT ME</Link>
            </div>
        </div>
    </header>
  );
}

export default Header;