import Image from "next/image";
import React from "react";
import Button from "../components/button";
import Navbar from "../components/Navbar";

const Project = () => {
  const projects = [
    {
      title: "AOS Helper",
      img: "/project-1.png",
      github: "https://github.com/nextSaimon/AOS-Helper",
      demo: "https://marketplace.visualstudio.com/items?itemName=nextsaimon.aos-helper",
      github_button_enabled: true,
      demo_button_enabled: true,
    },
  ];

  return (
    <div id="projects" className="overflow-hidden">
      <Navbar />
      <p className="section__text__p1" data-aos="fade-left">
        Browse My Recent
      </p>
      <h1 className="title" data-aos="fade-right">
        Projects
      </h1>

      <div className="container my-5">
        <div className="flex justify-around flex-wrap gap-3 w-[80%] mx-auto">
          {projects.map((project, index) => (
            <div className="w-full max-w-xs mx-auto " key={index}>
              <div
                className="card shadow"
                style={{ width: "100%" }}
                data-aos="fade-up"
              >
                <div className="img">
                  <Image
                    className="card-img-top"
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                </div>

                <div className="card-body text-center mt-2">
                  <h4 className="card-title text-[23px]">{project.title}</h4>
                  <div className=" space-x-2">
                    {project.github_button_enabled && (
                      <Button
                        text="GitHub"
                        link={project.github}
                        className=" border-[1px] px-2 py-1 w-[100px] hover:text-white hover:bg-gray-900 hover:shadow transition-all ease-in-out duration-300"
                        style={{ borderRadius: 50 }}
                      />
                    )}
                    {project.demo_button_enabled && (
                      <Button
                        text="Live Demo"
                        link={project.demo}
                        className=" border-[1px] px-2 py-1 w-[100px] hover:text-white hover:bg-gray-900 hover:shadow transition-all ease-in-out duration-300"
                        style={{ borderRadius: 50 }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
