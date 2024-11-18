// Define project images
const typing_website = "../Foundation/images/img1.JPG";
const builder = "../Foundation/images/img2.JPG";
const businesman = "../Foundation/images/img3.JPG";
const car_auction = "../Foundation/images/img4.JPG";

// Define the project data
const projects = [
  {
    name: "Typing School website",
    description:
      "Typing School, where we offer a comprehensive program designed to help students of all levels master the art of typing. Our curriculum combines structured lessons with engaging practice exercises to improve speed, accuracy, and efficiency. Whether you're a beginner or looking to refine your skills, we provide the tools and guidance to help you succeed in today's digital world.",
    link: "https://typing-master-seven.vercel.app/",
    image: typing_website,
  },
  {
    name: "Builder personal website",
    description:
      "A project where innovative building designs are brought to life using state-of-the-art VR and AR technologies. Our approach integrates advanced tools and immersive environments to showcase completed projects, allowing you to engage with the designs in interactive and dynamic ways. Experience  creativity with technology to shape the future of construction, providing clients with a glimpse into the next generation of architectural solutions. ",
    link: "https://h-web-8he2.vercel.app/",
    image: builder,
  },
  {
    name: "Professioanl businesman website",
    description:
      "professional portfolio, where I showcase my expertise in driving successful business strategies and building lasting partnerships. With years of experience across various industries, I offer innovative solutions that help companies grow and thrive in competitive markets. My approach focuses on delivering results through strategic planning, leadership, and a commitment to excellence. Explore my projects, achievements, and insights, and discover how I can help take your business to the next level. Let’s connect and work together to achieve your goals with integrity and vision.",
    link: "https://www.motilearn.site/",
    image: businesman,
  },
  {
    name: "Car auction website",
    description:
      "Welcome to our car auction platform, where buying and selling vehicles is made easy, secure, and efficient. We offer a wide variety of cars, from classic models to the latest releases, all available for bidding in real-time. Our platform is designed with both sellers and buyers in mind, providing an intuitive interface to list and browse vehicles. Experience the excitement of competitive bidding, as well as access to detailed car listings, including photos, specifications, and history reports. Join our community today and find your next car or sell your vehicle in a trusted, dynamic marketplace.",
    link: "https://bid-auction.vercel.app/live",
    image: car_auction,
  },
];

// Get the container to append the project items
const projectsContainer = document.getElementById("projects-container");

// Loop through each project and render dynamically
projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("span6");

  projectDiv.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="img-polaroid" />
    <div class="roles">
      <h5><strong>${project.name}</strong></h5>
      <p>${project.description}</p>
      <ul class="social-profile">
        <button
          style="padding: 10px; background-color: #4c98dc; border: none; border-radius: 10px; font-weight: 700;"
          onclick="window.location.href='${project.link}'">
          Visit Site
        </button>
      </ul>
    </div>
  `;

  projectsContainer.appendChild(projectDiv);
});
