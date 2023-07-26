export interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
}

interface ProjectProps {
  items: Project[];
  class?: string;
}

export default function Projects(props: ProjectProps) {
  return (
    <div
      class={`pt-8 grid grid-cols-1 sm:grid-cols-3 items-center ${
        props.class ?? ""
      }`}
    >
      {props.items.filter((item) => item.link.length > 0).map((project) => (
        <div class="w-full max-w-sm mx-auto group">
          <a href={project.link} tabIndex={-1}>
            <img
              loading="lazy"
              src={project.image}
              alt={project.title}
              width={800}
              height={300}
              style={{ aspectRatio: "1/1" }}
              class="object-cover shadow-lg group-hover:(shadow-xl opacity-70) rounded-lg"
            />
          </a>
          <div class="mt-4 flex items-center">
            <div class="text(lg gray-600) flex-1">
              <a class="font-bold text-xl" href={project.link}>{project.title}</a>
              <p class="text-lg" style="padding-top: 1.5%;">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
