import { Link } from "react-router-dom";
import { Project } from "../data/data_schema";

export default function Card({ project }: { project: Project }) {
    return (
        <div className="w-full min-h-64 shadow-2xl rounded-3xl my-12 flex flex-col lg:flex-row">
            <img src={project.image} onError={(e) => e.currentTarget.src = 'https://placehold.co/640x480.png'} className="w-full h-1/2 rounded-t-3xl lg:h-full lg:w-1/2 lg:rounded-tr-none lg:rounded-bl-3xl" alt={project.title} />
            <div className="w-full p-4 flex flex-col gap-2 lg:w-1/2">
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <p>{project.description}</p>
                {project.points.map((point) => <p>&#11185; {point}</p>)}
                <Link to={project.link}><button className="blue-btn">Read More</button></Link>
            </div>
        </div>
    )
}
