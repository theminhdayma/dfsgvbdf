function render() {
    // Lấy thông tin từ localStorage
    let heroInfo = JSON.parse(localStorage.getItem("heroInfo"));
    let personalDetail = JSON.parse(localStorage.getItem("personalDetail"));
    let projects = JSON.parse(localStorage.getItem("projects"));
  
    // Hiển thị thông tin trong HTML
    document.getElementById("hero-name").textContent = heroInfo.name;
    document.getElementById("hero-job").textContent = heroInfo.job;
    document.getElementById("hero-img").src = heroInfo.imgUrl;
  
    document.getElementById("personal-name").textContent = personalDetail.name;
    document.getElementById("personal-dob").textContent = personalDetail.dob;
    document.getElementById("personal-languages").textContent = personalDetail.spokenLanguages.join(", ");
    document.getElementById("personal-nationality").textContent = personalDetail.nationality;
    document.getElementById("personal-interests").textContent = personalDetail.interest.join(", ");
  
    let techList = document.getElementById("tech-list");
    techList.innerHTML = "";
    personalDetail.techs.forEach((tech) => {
      let techItem = document.createElement("li");
      techItem.innerHTML = `
        <img src="${tech.imgUrl}" alt="${tech.techName}" />
        <span>${tech.techName}</span>
        <span>${tech.exp} years of experience</span>
      `;
      techList.appendChild(techItem);
    });
  
    let projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    projects.forEach((project) => {
      let projectItem = document.createElement("li");
      projectItem.innerHTML = `
        <img src="${project.imgUrl}" alt="${project.projectName}" />
        <h3>${project.projectName}</h3>
        <p>Link: <a href="${project.link}" target="_blank">${project.link}</a></p>
        <p>Tags: ${project.tags.join(", ")}</p>
      `;
      projectList.appendChild(projectItem);
    });
  }
  
  // Gọi hàm render để hiển thị thông tin
  render();