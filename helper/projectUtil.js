export function allProjects() {
  async function getProjects() {
    try {
      const req = await fetch(
        "https://portfolio-ba2a0-default-rtdb.firebaseio.com/projects.json"
      );
      const data = await req.json();
      const projects = [];
      for (const key in data) {
        projects.push({
          id: key,
          ...data[key],
        });
      }

      return projects;
    } catch (error) {
      console.log(error);
    }
  }
  return getProjects();
}

export async function getSelectedProject(pid) {
  const all = await allProjects();
  console.log(all);
  const selectedProject = all.find(
    (project) => project.title.split(" ").join("-").toLowerCase() === pid
  );
  console.log(selectedProject);
  return selectedProject;
}
