import { Description, Role } from "../data/data";
import { Project } from "../data/data_schema";

function HomeDefault(props: { articles: Project[] }) {
    return (
        <>
        <div className="min-h-64 p-6 md:p-12 w-full shadow-2xl rounded-3xl">
            <h1 className="text-4xl mb-4">{Role}</h1>
            <div className="h-full w-full flex flex-col justify-evenly text-lg gap-4">
                { Description.map((desc) => <p>{desc}</p>) }
            </div>
        </div>
        { props.articles && props.articles.length > 0 && <div className="mt-12 flex flex-col gap-4">
            <span className="text-2xl font-semibold">Artcles</span>
            {props.articles.map((article) => {
                    return <div className="cursor-pointer" key={article.link} onClick={() => window.location = article.link as any }>
                        <span className="font-semibold underline">{article.title}</span>
                        {article.points && <div className="text-sm text-gray-500">#{article.points.join(", #")}</div>}
                    </div>
            })}
        </div> }
        </>
    );
  }
  
  export default HomeDefault;