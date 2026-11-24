function ProjectData() {
  const projects = [
    {
      title: "Volunteer Website",
      cardDescription: "Volunteer website prototype built with Angular.",
      description: "Description of Project 1",
      cardImage: "/images/projects/DoSomethingCover.png",
      images: {
        image1: "/images/project1.jpg",
        image2: "/images/project1-2.jpg",
        image3: "/images/project1-3.jpg"
      },
      link: "https://zeqlous.github.io/DoSomething/#/",
      githubLink: ""
    },
    {
      title: "Project 2",
      cardDescription: "This is a brief description of Project 2.",
      description: "Description of Project 2",
      cardImage: "/images/projects/ExampleProject.png",
      images: {
        image1: "/images/project2.jpg",
        image2: "/images/project2-2.jpg",
        image3: "/images/project2-3.jpg"
      },
      link: "https://example.com/project2",
      githubLink: ""
    },
    {
      title: "Snake Game",
      cardDescription:"Classis snake game made in HTML, CSS, and JS.",
      description: "Blah blah blah",
      cardImage: "/images/projects/SnakeProject.png",
      images: {
        image1: "/images/project2.jpg",
        image2: "/images/project2-2.jpg",
        image3: "/images/project2-3.jpg"
      },
      link: "https://example.com/project2",
      githubLink: ""
    }
  ];

  return projects;
}

export default ProjectData;