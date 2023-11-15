import p1 from "./assets/ecommerce.jpg";
import p2 from "./assets/movies.webp";
import p3 from "./assets/youtube1.webp";
import p4 from "./assets/google.jpg";
import p5 from "./assets/weather.jpg";
import p6 from "./assets/chat.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    {
        name: "Mobile App",
        id: "mobile-app",
    },
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "E-commerce App 'Electronic Store' ",
        image: p1,
        tags: ["dashboard", "mobile-app"],
    },
    {
        name: "Movix Single Page Web Application ",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: " YouTube Clone",
        image: p3,
        tags: ["mobile-app"],
    },
    {
        name: "Search Engine  'Google Clone'",
        image: p4,
        tags: ["mobile-app"],
    },
    {
        name: "Weather Application",
        image: p5,
        tags: ["website", "dashboard"],
    },
    {
        name: "A Real-Time Chat Application",
        image: p6,
        tags: ["website"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 5,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 10,
        description: "POSTS",
    },
];
