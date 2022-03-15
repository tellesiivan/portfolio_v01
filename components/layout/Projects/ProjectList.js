import Item from "./Item";

const positions = [
  {
    id: 1,
    title: "Player Boost",
    type: "Full-time",
    status: "On going",
    fromTo: "2021 - present",
    tags: [
      "ReactJS",
      "Redux",
      "FirebaseDB",
      "TailwindCSS",
      "Axios",
      "FirebaseAuth",
      "Git",
    ],
    location: "ongoing",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "NBA Live",
    status: "On going",
    fromTo: "2022 - present",
    tags: [
      "ReactJS",
      "Redux",
      "FirebaseDB",
      "TailwindCSS",
      "Axios",
      "FirebaseAuth",
      "Git",
    ],
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "Remote Me",
    status: "On going",
    fromTo: "2021",
    tags: [
      "ReactJS",
      "Redux",
      "FirebaseDB",
      "TailwindCSS",
      "Axios",
      "FirebaseAuth",
      "Git",
    ],
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

export default function ProjectList() {
  return (
    <div className="mx-3 mt-4 overflow-hidden">
      <ul role="list">
        {positions.map((position) => (
          <Item position={position} key={position.id} />
        ))}
      </ul>
    </div>
  );
}
