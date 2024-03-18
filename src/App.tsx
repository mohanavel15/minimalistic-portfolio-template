import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import HomeDefault from "./components/home_default";
import ContactMe from "./components/contact";
import { APIBlogUrl, PlaceHolderArticles, UsePlaceHolderArticles, projects_data, work_data } from "./data/data";
import Card from "./components/card";
import { useEffect, useState } from "react";
import { Project } from "./data/data_schema";

function App() {
  let [articles, setArticles] = useState<Project[]>([]);
  useEffect(() => {
    if (UsePlaceHolderArticles) {
      setArticles(PlaceHolderArticles);
      return
    }
    fetch(APIBlogUrl).then(async result => {
      if (!result.ok) return
      const data = await result.json()
      setArticles([]);
      data.items.forEach((item: any) => {
        setArticles((articles) => [...articles, { title: item.title, link: item.guid, points: item.categories, description: "", image: "" }])
      })
    })
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="projects" element={<>{projects_data.map((project) => <Card project={project} />)}</>} />
          <Route path="work" element={<>{work_data.map((work) => <Card project={work} />)}</>} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<HomeDefault articles={articles} />} />
          <Route index element={<HomeDefault articles={articles} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
