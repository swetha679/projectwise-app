
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "proj-001",
    title: "E-commerce Platform Frontend",
    tagline: "Build a responsive and modern online store interface.",
    description:
      "Develop a complete frontend for an e-commerce website using React and Next.js. Features include product listings, a shopping cart, and a checkout process. The goal is to create a fast, accessible, and user-friendly experience.",
    requiredSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "State Management"],
    timeEstimate: 15,
    domain: "Web Development",
    image: "project-1",
  },
  {
    id: "proj-002",
    title: "Task Management Mobile App",
    tagline: "Design and build a cross-platform productivity app.",
    description:
      "Create a task management application for iOS and Android using React Native. The app should allow users to create tasks, set deadlines, and organize them into projects. It should also feature push notifications for reminders.",
    requiredSkills: ["React Native", "JavaScript", "Firebase", "UI/UX Design"],
    timeEstimate: 20,
    domain: "Mobile Development",
    image: "project-2",
  },
  {
    id: "proj-003",
    title: "Sales Data Analysis Dashboard",
    tagline: "Visualize sales data to uncover business insights.",
    description:
      "Build an interactive dashboard to analyze sales data. This project involves using Python with Pandas for data cleaning and manipulation, and a library like Plotly or D3.js for creating visualizations. The final dashboard will be web-based.",
    requiredSkills: ["Python", "Pandas", "Data Visualization", "SQL", "Flask/Django"],
    timeEstimate: 10,
    domain: "Data Science",
    image: "project-3",
  },
  {
    id: "proj-004",
    title: "Personal Portfolio Website Generator",
    tagline: "Automate the creation of stunning developer portfolios.",
    description:
      "Develop a tool that generates a personal portfolio website from a user's GitHub profile. The application will fetch repository data, process it, and present it in a customizable and aesthetically pleasing web template.",
    requiredSkills: ["Node.js", "APIs", "HTML/CSS", "JavaScript", "Templating Engines"],
    timeEstimate: 8,
    domain: "Web Development",
    image: "project-4",
  },
  {
    id: "proj-005",
    title: "Home Automation System with Raspberry Pi",
    tagline: "Control your home environment with a custom IoT solution.",
    description:
      "Build a home automation system using a Raspberry Pi. This project includes writing Python scripts to control smart devices (lights, sensors, etc.) via APIs or GPIO pins and creating a simple web interface for remote control.",
    requiredSkills: ["Python", "Raspberry Pi", "IoT", "Linux", "Basic Electronics"],
    timeEstimate: 12,
    domain: "IoT",
    image: "project-5",
  },
  {
    id: "proj-006",
    title: "Community Forum Platform",
    tagline: "Create a full-stack platform for online discussions.",
    description:
      "Develop a full-stack web application for a community forum. The backend will be built with Node.js, Express, and a PostgreSQL database. The frontend will be a single-page application using Vue.js. Features include user authentication, posting threads, and commenting.",
    requiredSkills: ["Node.js", "Express", "PostgreSQL", "Vue.js", "Authentication"],
    timeEstimate: 25,
    domain: "Web Development",
    image: "project-6",
  },
  {
    id: "proj-007",
    title: "AI Chatbot for Customer Service",
    tagline: "Implement a smart chatbot using modern AI tools.",
    description:
      "Build a customer service chatbot using a large language model API (like GPT or Gemini). The chatbot should be able to answer frequently asked questions and escalate complex queries to a human agent. The project includes building a simple web interface for the chat.",
    requiredSkills: ["Python", "Flask", "JavaScript", "GenAI", "APIs"],
    timeEstimate: 18,
    domain: "AI/ML",
    image: "project-7"
  },
  {
    id: "proj-008",
    title: "Recipe Finder Application",
    tagline: "Find recipes based on ingredients you have at home.",
    description:
      "Create a web app where users can input a list of ingredients and get a list of recipes they can make. This involves integrating with a third-party recipe API, creating a search interface, and displaying recipe details.",
    requiredSkills: ["React", "JavaScript", "APIs", "HTML/CSS"],
    timeEstimate: 7,
    domain: "Web Development",
    image: "project-8"
  },
  {
    id: "proj-009",
    title: "Weather Forecasting App",
    tagline: "A clean and simple weather app with geolocation.",
    description:
      "Develop a weather application that detects the user's location and displays the current weather and a 5-day forecast. You will need to use a weather data API and present the information in a clear and visually appealing way.",
    requiredSkills: ["JavaScript", "HTML/CSS", "APIs", "Geolocation"],
    timeEstimate: 5,
    domain: "Web Development",
    image: "project-9"
  },
  {
    id: "proj-010",
    title: "Real-time Stock Tracker",
    tagline: "Monitor stock prices with a live-updating dashboard.",
    description:
      "Build a dashboard that displays real-time stock prices for a user-selected list of tickers. This project will use WebSockets or a real-time data API (like Finnhub) to push live data to the frontend, built with React or Vue.",
    requiredSkills: ["React", "WebSockets", "APIs", "Data Visualization"],
    timeEstimate: 14,
    domain: "Web Development",
    image: "project-10"
  },
  {
    id: "proj-011",
    title: "Object Detection Model",
    tagline: "Train a model to detect objects in images.",
    description:
      "Use TensorFlow or PyTorch to train a custom object detection model. You will learn to gather and label a dataset, choose a pre-trained model for transfer learning (like YOLO or SSD), and deploy the model as a simple web service.",
    requiredSkills: ["Python", "TensorFlow/PyTorch", "Computer Vision", "Data Annotation"],
    timeEstimate: 22,
    domain: "AI/ML",
    image: "project-11"
  },
  {
    id: "proj-012",
    title: "CI/CD Pipeline for a Web App",
    tagline: "Automate the testing and deployment process.",
    description:
      "Set up a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline for a sample web application. This involves using tools like GitHub Actions or Jenkins to automatically build, test, and deploy code changes to a hosting provider like Vercel or AWS.",
    requiredSkills: ["CI/CD", "GitHub Actions", "Docker", "Scripting"],
    timeEstimate: 9,
    domain: "DevOps",
    image: "project-12"
  },
  {
    id: "proj-013",
    title: "Music Player Desktop App",
    tagline: "Build a sleek music player with Electron.",
    description:
      "Create a cross-platform desktop music player application using Electron. The app should be able to scan local music files, organize them into a library, and play audio. Focus on creating a polished user interface.",
    requiredSkills: ["Electron", "JavaScript", "Node.js", "HTML/CSS"],
    timeEstimate: 16,
    domain: "Desktop Development",
    image: "project-13"
  },
  {
    id: "proj-014",
    title: "Peer-to-Peer File Sharing App",
    tagline: "Share files directly between computers over a network.",
    description:
      "Develop a command-line or simple GUI application for peer-to-peer file sharing using WebRTC or raw sockets. This project is a deep dive into networking concepts and data transfer protocols.",
    requiredSkills: ["Go", "Networking", "WebRTC", "Concurrency"],
    timeEstimate: 18,
    domain: "Systems Programming",
    image: "project-14"
  },
  {
    id: "proj-015",
    title: "3D Game with Unity",
    tagline: "Create a simple 3D platformer game.",
    description:
      "Learn the fundamentals of game development by creating a small 3D platformer game in Unity. You will work with game physics, character controls, level design, and basic C# scripting.",
    requiredSkills: ["Unity", "C#", "Game Design", "3D Modeling"],
    timeEstimate: 30,
    domain: "Game Development",
    image: "project-15"
  },
  {
    id: "proj-016",
    title: "URL Shortener Service",
    tagline: "Build a microservice to shorten long URLs.",
    description:
      "Create a complete URL shortener service like Bitly. This involves a backend to handle URL mapping and redirection, a database (like Redis or PostgreSQL) to store the links, and a simple frontend to input the URL.",
    requiredSkills: ["Go", "Redis", "REST APIs", "Docker"],
    timeEstimate: 10,
    domain: "Backend Development",
    image: "project-16"
  },
  {
    id: "proj-017",
    title: "Movie Recommendation Engine",
    tagline: "Suggest movies to users based on their ratings.",
    description:
      "Build a collaborative filtering recommendation system. Using a dataset like MovieLens, you'll implement algorithms (like matrix factorization) in Python to predict how a user would rate a movie they haven't seen.",
    requiredSkills: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    timeEstimate: 15,
    domain: "Data Science",
    image: "project-17"
  },
  {
    id: "proj-018",
    title: "Serverless Function for Image Processing",
    tagline: "Create a cloud function to resize images automatically.",
    description:
      "Write a serverless function (e.g., AWS Lambda, Google Cloud Function) that triggers whenever an image is uploaded to a cloud storage bucket. The function will automatically create multiple thumbnail sizes of the image.",
    requiredSkills: ["AWS Lambda", "Python/Node.js", "Cloud Storage", "Serverless"],
    timeEstimate: 6,
    domain: "Cloud/DevOps",
    image: "project-18"
  },
  {
    id: "proj-019",
    title: "Web Scraper for Job Postings",
    tagline: "Aggregate job postings from multiple websites.",
    description:
      "Develop a web scraper using Python libraries like Beautiful Soup and Scrapy to collect job postings from various career sites. The collected data will be cleaned and stored in a structured format like a CSV file or a database.",
    requiredSkills: ["Python", "Beautiful Soup", "Scrapy", "Data Cleaning"],
    timeEstimate: 9,
    domain: "Data Engineering",
    image: "project-19"
  },
  {
    id: "proj-020",
    title: "Fitness Tracker API",
    tagline: "Build a RESTful API to log workouts and track progress.",
    description:
      "Design and build a secure RESTful API for a fitness tracking application. Users should be able to register, log in, and record their exercises, sets, and reps. The API should be well-documented using Swagger/OpenAPI.",
    requiredSkills: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    timeEstimate: 14,
    domain: "Backend Development",
    image: "project-20"
  },
  {
    id: "proj-021",
    title: "Code Snippet Manager",
    tagline: "A personal library for your most-used code snippets.",
    description: "Build a desktop or web application where you can save, categorize, and quickly search for your favorite code snippets. Features could include syntax highlighting and cloud synchronization.",
    requiredSkills: ["React", "Electron", "SQLite", "Syntax Highlighting"],
    timeEstimate: 12,
    domain: "Web Development",
    image: "project-21"
  },
  {
    id: "proj-022",
    title: "Blockchain Voting System",
    tagline: "A decentralized and transparent voting application.",
    description: "Create a simplified blockchain-based voting system using Solidity and Ethereum. This project will teach you the basics of smart contracts, decentralized applications (DApps), and how blockchain ensures transparency and immutability.",
    requiredSkills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    timeEstimate: 28,
    domain: "Blockchain",
    image: "project-22"
  },
  {
    id: "proj-023",
    title: "Sentiment Analysis of Social Media",
    tagline: "Analyze public sentiment on a topic from Twitter data.",
    description: "Use Python and NLP libraries (like NLTK or spaCy) to perform sentiment analysis on a stream of tweets related to a specific topic. The results will be visualized to show the overall sentiment trend over time.",
    requiredSkills: ["Python", "NLP", "APIs", "Data Visualization"],
    timeEstimate: 13,
    domain: "Data Science",
    image: "project-23"
  },
  {
    id: "proj-024",
    title: "Online Code Editor",
    tagline: "A simple, browser-based code editor.",
    description: "Build a web-based code editor similar to CodePen, where a user can write HTML, CSS, and JavaScript and see the live result. This involves working with iframes and event handling to capture and render the code.",
    requiredSkills: ["JavaScript", "HTML/CSS", "DOM Manipulation"],
    timeEstimate: 10,
    domain: "Web Development",
    image: "project-24"
  },
  {
    id: "proj-025",
    title: "2D Game with Godot Engine",
    tagline: "Create a classic top-down 2D RPG game.",
    description: "Dive into the Godot game engine by building a 2D RPG. You'll learn about scenes, nodes, scripting with GDScript, creating tilemaps for levels, and implementing simple combat and dialogue systems.",
    requiredSkills: ["Godot", "GDScript", "Game Design", "Pixel Art"],
    timeEstimate: 25,
    domain: "Game Development",
    image: "project-25"
  },
  {
    id: "proj-026",
    title: "Expense Tracker PWA",
    tagline: "A progressive web app to manage your personal finances.",
    description: "Build an expense tracker that works offline and can be 'installed' on a mobile device as a PWA. It should feature data entry, categorization, and summary charts. Use local storage or IndexedDB for offline capabilities.",
    requiredSkills: ["React", "Service Workers", "PWA", "Chart.js"],
    timeEstimate: 15,
    domain: "Web Development",
    image: "project-26"
  },
  {
    id: "proj-027",
    title: "Custom Linux Shell",
    tagline: "Build your own command-line interpreter in C or Rust.",
    description: "Explore systems programming by building a simple Linux shell. Your shell will need to parse user input, handle built-in commands (like `cd`), execute external programs, and manage basic job control.",
    requiredSkills: ["C/Rust", "Linux", "Systems Programming", "Parsing"],
    timeEstimate: 20,
    domain: "Systems Programming",
    image: "project-27"
  },
  {
    id: "proj-028",
    title: "AR Business Card",
    tagline: "Bring a business card to life with augmented reality.",
    description: "Create an augmented reality experience where pointing a phone's camera at a business card reveals interactive 3D models, buttons, and contact information. This project uses tools like AR.js or Unity's AR Foundation.",
    requiredSkills: ["AR.js", "A-Frame", "3D Modeling", "JavaScript"],
    timeEstimate: 11,
    domain: "AR/VR",
    image: "project-28"
  },
  {
    id: "proj-029",
    title: "Infrastructure as Code with Terraform",
    tagline: "Define and provision cloud infrastructure declaratively.",
    description: "Use Terraform to write configuration files that define a set of cloud resources (e.g., a VPC, subnets, and a virtual machine on AWS or GCP). This project teaches the principles of IaC and automated infrastructure management.",
    requiredSkills: ["Terraform", "AWS/GCP", "IaC", "Networking"],
    timeEstimate: 10,
    domain: "DevOps",
    image: "project-29"
  },
  {
    id: "proj-030",
    title: "Real-time Collaborative Whiteboard",
    tagline: "Draw with others in real-time on a shared canvas.",
    description: "Build a web application that provides a shared digital whiteboard. Multiple users can join a session and draw simultaneously. This requires using WebSockets for real-time communication and HTML5 Canvas for drawing.",
    requiredSkills: ["JavaScript", "WebSockets", "Canvas API", "Node.js"],
    timeEstimate: 17,
    domain: "Web Development",
    image: "project-30"
  },
  {
    id: "proj-031",
    title: "GraphQL API for a Blog",
    tagline: "Create a flexible and efficient API for a blogging platform.",
    description: "Design and implement a GraphQL API that can serve data for a blog. The API should support queries for fetching posts, authors, and comments, as well as mutations for creating new content. Use Apollo Server and Express.",
    requiredSkills: ["GraphQL", "Apollo", "Node.js", "SQL/NoSQL", "Express.js"],
    timeEstimate: 14,
    domain: "Backend Development",
    image: "project-31"
  },
  {
    id: "proj-032",
    title: "VR Art Gallery",
    tagline: "Walk through a virtual gallery showcasing digital art.",
    description: "Create a virtual reality art gallery where users can move through a 3D space and view images or models. This project is an introduction to VR development and can be built using A-Frame for web-based VR or Unity/Unreal for native VR.",
    requiredSkills: ["A-Frame/Unity", "VR", "3D Design", "JavaScript/C#"],
    timeEstimate: 20,
    domain: "AR/VR",
    image: "project-32"
  },
  {
    id: "proj-033",
    title: "AI-Powered Sudoku Solver",
    tagline: "Build an agent that can solve any Sudoku puzzle.",
    description: "Implement a Sudoku solver using computer vision to read a puzzle from an image and a backtracking algorithm to solve it. This combines two interesting fields of AI into a practical and fun project.",
    requiredSkills: ["Python", "OpenCV", "Algorithms", "Backtracking"],
    timeEstimate: 12,
    domain: "AI/ML",
    image: "project-33"
  },
  {
    id: "proj-034",
    title: "Plugin for VS Code or Figma",
    tagline: "Extend your favorite tools with custom functionality.",
    description: "Create a plugin for a popular application like VS Code or Figma. This could be a new theme, a code linter, a shortcut utility, or anything that improves the workflow. This project involves reading API documentation and and working within an existing framework.",
    requiredSkills: ["TypeScript", "APIs", "Plugin Development"],
    timeEstimate: 15,
    domain: "Software Development",
    image: "project-34"
  },
  {
    id: "proj-035",
    title: "Flight Price Tracker",
    tagline: "Get alerts when flight prices drop for your chosen route.",
    description: "Build an application that scrapes airline websites or uses an API (like Skyscanner's) to track flight prices for a specific route and date range. The app will send the user an email or notification when the price drops below a certain threshold.",
    requiredSkills: ["Python", "Web Scraping", "APIs", "Databases"],
    timeEstimate: 11,
    domain: "Web Development",
    image: "project-35"
  },
  {
    id: "proj-036",
    title: "E-Book Library Management System",
    tagline: "Organize and manage your collection of digital books.",
    description: "Create a desktop or web application to manage a library of e-books (e.g., PDFs, EPUBs). Features should include importing books, editing metadata (title, author), searching, and possibly an integrated reader.",
    requiredSkills: ["Java", "SQL", "GUI Frameworks"],
    timeEstimate: 18,
    domain: "Software Development",
    image: "project-36"
  },
  {
    id: "proj-037",
    title: "Personal CRM",
    tagline: "A simple tool to manage your personal and professional contacts.",
    description: "Build a lightweight Customer Relationship Management (CRM) tool to keep track of your contacts, when you last spoke to them, and important notes. This can be a web app with a simple, clean interface.",
    requiredSkills: ["Ruby on Rails", "PostgreSQL", "HTML/CSS"],
    timeEstimate: 13,
    domain: "Web Development",
    image: "project-37"
  },
  {
    id: "proj-038",
    title: "CPU and Memory Usage Monitor",
    tagline: "A real-time dashboard for your system's performance.",
    description: "Write a script or application that monitors your computer's CPU and memory usage in real-time and displays it on a graphical dashboard. This is a great way to learn about system calls and performance monitoring.",
    requiredSkills: ["Python/Go", "System APIs", "GUI/WebSockets"],
    timeEstimate: 9,
    domain: "Systems Programming",
    image: "project-38"
  },
  {
    id: "proj-039",
    title: "Automated Plant Watering System",
    tagline: "An IoT project to keep your plants happy.",
    description: "Use an Arduino or ESP32, a soil moisture sensor, and a water pump to create a system that automatically waters your plants when the soil is dry. You can add a web dashboard to monitor the status and trigger watering manually.",
    requiredSkills: ["Arduino", "C++", "IoT", "Sensors", "Basic Electronics"],
    timeEstimate: 14,
    domain: "IoT",
    image: "project-39"
  },
  {
    id: "proj-040",
    title: "Markdown to HTML Converter",
    tagline: "Build a tool to convert Markdown files to styled HTML.",
    description: "Create a command-line tool or a web application that takes a Markdown file as input and produces a styled, self-contained HTML file as output. You'll need to parse the Markdown syntax and apply CSS for styling.",
    requiredSkills: ["Go/Rust", "Parsing", "HTML/CSS", "CLI"],
    timeEstimate: 8,
    domain: "Software Development",
    image: "project-40"
  },
  {
    id: "proj-041",
    title: "Language Learning Flashcard App",
    tagline: "Create a fun and effective way to learn new vocabulary.",
    description: "Develop a mobile or web app for language learning with flashcards. It should include features like spaced repetition, different quiz modes (e.g., multiple choice, typing), and the ability to create custom card decks.",
    requiredSkills: ["Swift/Kotlin", "Mobile Development", "UI/UX Design"],
    timeEstimate: 19,
    domain: "Mobile Development",
    image: "project-41"
  },
  {
    id: "proj-042",
    title: "Kubernetes Cluster Deployment Automation",
    tagline: "Automate the setup of a Kubernetes cluster on a cloud provider.",
    description: "Write Ansible playbooks or shell scripts to automate the provisioning of virtual machines and the installation and configuration of a Kubernetes cluster. This project provides deep insight into container orchestration.",
    requiredSkills: ["Kubernetes", "Ansible", "Bash", "Cloud Computing"],
    timeEstimate: 22,
    domain: "DevOps",
    image: "project-42"
  },
  {
    id: "proj-043",
    title: "AI Story Generator",
    tagline: "A creative writing partner that helps you write stories.",
    description: "Build a web app where a user can provide a starting prompt, and a generative AI model (like Gemini) will continue the story. You can add options for genre, characters, and tone to guide the AI's creativity.",
    requiredSkills: ["Python", "Flask", "GenAI", "JavaScript"],
    timeEstimate: 12,
    domain: "AI/ML",
    image: "project-43"
  },
  {
    id: "proj-091",
    title: "CSS Art Project",
    tagline: "Create a piece of art using only HTML and CSS.",
    description: "Challenge yourself to create a small illustration or animation of an object or character using only CSS. This is a fun way to master advanced CSS properties like transforms, pseudo-elements, and animations.",
    requiredSkills: ["HTML/CSS", "CSS Animations"],
    timeEstimate: 5,
    domain: "Web Design",
    image: "project-25"
  },
  {
    id: "proj-092",
    title: "Simple Java CRUD Application",
    tagline: "Build a foundational backend service with Java.",
    description: "Create a basic CRUD (Create, Read, Update, Delete) application using Java and the Spring Boot framework. The application will manage a simple entity like 'User' or 'Product' and expose REST endpoints to interact with it, storing data in an in-memory database like H2.",
    requiredSkills: ["Java", "Spring Boot", "REST APIs"],
    timeEstimate: 8,
    domain: "Backend Development",
    image: "project-47"
  },
  {
    id: "proj-093",
    title: "Text-Based Adventure Game",
    tagline: "Write a classic text-based RPG in Python.",
    description: "Create an interactive fiction game that runs in the console. The player will navigate through rooms, interact with objects, and make choices by typing commands. This is a great project for practicing object-oriented programming (OOP) principles.",
    requiredSkills: ["Python", "OOP"],
    timeEstimate: 5,
    domain: "Software Development",
    image: "project-43"
  },
  {
    id: "proj-094",
    title: "Meme Generator",
    tagline: "Create your own memes with custom text.",
    description: "Build a web app that allows users to select a popular meme template, add top and bottom text, and download the resulting image. This involves using the HTML Canvas API to draw the text onto the image.",
    requiredSkills: ["JavaScript", "HTML/CSS", "Canvas API"],
    timeEstimate: 4,
    domain: "Web Development",
    image: "project-7"
  },
  {
    id: "proj-095",
    title: "Browser Extension to Change Page Colors",
    tagline: "Build a simple Chrome extension to modify website styling.",
    description: "Create a browser extension that injects CSS into a page to change its colors, for example, by adding a dark mode or a sepia filter. This is a gentle introduction to browser extension development.",
    requiredSkills: ["JavaScript", "CSS", "Browser Extension APIs"],
    timeEstimate: 3,
    domain: "Software Development",
    image: "project-34"
  },
  {
    id: "proj-096",
    title: "To-Do List with Local Storage",
    tagline: "A classic beginner project to learn the fundamentals.",
    description: "Create a simple to-do list application. Users can add tasks, mark them as complete, and delete them. The list should persist between page reloads by saving the data to the browser's local storage.",
    requiredSkills: ["HTML/CSS", "JavaScript", "DOM Manipulation"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-2"
  },
  {
    id: "proj-097",
    title: "Digital Business Card with React",
    tagline: "Build a small, shareable digital business card.",
    description: "Create a single-page React application that serves as your digital business card. It should include your photo, name, title, and links to your social media profiles and portfolio. This is a great way to practice React component structure.",
    requiredSkills: ["React", "CSS"],
    timeEstimate: 4,
    domain: "Web Development",
    image: "project-28"
  },
  {
    id: "proj-098",
    title: "Quiz Application",
    tagline: "Test user knowledge with a multiple-choice quiz.",
    description: "Build a quiz app that presents questions with multiple-choice answers, tracks the user's score, and shows the final result at the end. The questions and answers can be stored in a simple JavaScript object.",
    requiredSkills: ["JavaScript", "HTML/CSS", "DOM Manipulation"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-33"
  },
  {
    id: "proj-099",
    title: "Image Carousel",
    tagline: "Create a responsive image slider from scratch.",
    description: "Build a reusable image carousel component with previous/next controls and indicator dots. This is a fantastic exercise for honing your JavaScript and CSS skills without relying on external libraries.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 5,
    domain: "Web Development",
    image: "project-32"
  },
  {
    id: "proj-100",
    title: "Drawing Pad",
    tagline: "A simple drawing application using HTML Canvas.",
    description: "Create a web-based drawing pad where users can draw with their mouse. Features can include changing the color and thickness of the brush. This project is a great introduction to the HTML Canvas API.",
    requiredSkills: ["JavaScript", "HTML/CSS", "Canvas API"],
    timeEstimate: 5,
    domain: "Web Development",
    image: "project-30"
  },
  {
    id: "proj-101",
    title: "Simple Calculator",
    tagline: "Build a functional calculator with a stylish interface.",
    description: "Create a web-based calculator that can perform basic arithmetic operations. The focus is on handling user input, performing calculations, and updating the display, all with clean JavaScript and a nice UI.",
    requiredSkills: ["HTML/CSS", "JavaScript"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-26"
  },
  {
    id: "proj-102",
    title: "Accordion Component",
    tagline: "Build a collapsible content component from scratch.",
    description: "Create a reusable accordion UI component. When a user clicks a header, the corresponding content section should expand or collapse. This is a common UI pattern and a good exercise in DOM manipulation and state management.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-1"
  },
  {
    id: "proj-103",
    title: "CSV Data Parser and Display",
    tagline: "Read a CSV file and display it as an HTML table.",
    description: "Write a JavaScript function that fetches a CSV file, parses the data, and dynamically generates an HTML table to display its contents. This is a fundamental skill for data-driven web applications.",
    requiredSkills: ["JavaScript", "File API", "HTML/CSS"],
    timeEstimate: 4,
    domain: "Web Development",
    image: "project-3"
  },
  {
    id: "proj-104",
    title: "Countdown Timer",
    tagline: "A timer that counts down to a specific date.",
    description: "Build an application that takes a future date as input and displays a live countdown timer showing the remaining days, hours, minutes, and seconds. This is a great project for working with JavaScript's Date object and `setInterval`.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-9"
  },
  {
    id: "proj-105",
    title: "FAQ Section with Toggles",
    tagline: "A common UI component for displaying questions and answers.",
    description: "Create an FAQ (Frequently Asked Questions) section where clicking on a question reveals the answer. This is a simple but effective way to practice handling click events and toggling element visibility.",
    requiredSkills: ["HTML/CSS", "JavaScript"],
    timeEstimate: 1,
    domain: "Web Development",
    image: "project-6"
  },
  {
    id: "proj-106",
    title: "Random Quote Generator",
    tagline: "Display a new random quote with the click of a button.",
    description: "Build a simple app that fetches quotes from an API or a local JSON file and displays a random one each time the user clicks a button. This is a classic beginner project for learning about APIs and DOM manipulation.",
    requiredSkills: ["JavaScript", "APIs", "HTML/CSS"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-43"
  },
  {
    id: "proj-107",
    title: "Password Generator",
    tagline: "Create strong, random passwords based on user criteria.",
    description: "Build a tool that generates a random password. Allow the user to specify criteria such as length and whether to include uppercase letters, numbers, and special characters.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-22"
  },
  {
    id: "proj-108",
    title: "Unit Converter",
    tagline: "A simple tool to convert between different units of measurement.",
    description: "Create a utility that can convert between different units, such as kilometers to miles, or Celsius to Fahrenheit. This project focuses on handling user input and performing mathematical calculations.",
    requiredSkills: ["HTML/CSS", "JavaScript"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-38"
  },
  {
    id: "proj-109",
    title: "Word Counter",
    tagline: "A tool to count words and characters in a piece of text.",
    description: "Build a simple web application with a textarea where a user can paste text. The app should then display a live count of the number of words and characters in the input.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 1,
    domain: "Web Development",
    image: "project-24"
  },
  {
    id: "proj-110",
    title: "Color Palette Generator",
    tagline: "Generate and discover new color palettes.",
    description: "Create a tool that generates random color palettes. A user should be able to click a button to see a new set of colors, and click on a specific color to copy its hex code to the clipboard.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 4,
    domain: "Web Development",
    image: "project-25"
  },
  {
    id: "proj-111",
    title: "Modal/Popup Component",
    tagline: "Create a reusable modal window from scratch.",
    description: "Build a modal dialog component that can be triggered by a button click. The modal should appear as an overlay on top of the page content and have a close button. This is a fundamental UI component for any web developer.",
    requiredSkills: ["HTML/CSS", "JavaScript", "DOM Manipulation"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-1"
  },
  {
    id: "proj-112",
    title: "Light/Dark Mode Toggle",
    tagline: "Implement a theme switcher for a webpage.",
    description: "Add a button to a simple webpage that toggles it between a light theme and a dark theme. This involves changing CSS variables or classes with JavaScript and saving the user's preference in local storage.",
    requiredSkills: ["CSS", "JavaScript", "DOM Manipulation"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-13"
  },
  {
    id: "proj-113",
    title: "Character Counter for Text Field",
    tagline: "Provide real-time feedback on input length.",
    description: "Enhance a standard textarea or input field to show a character count that updates as the user types. It can also enforce a maximum character limit. This is a common UX feature found in many web forms.",
    requiredSkills: ["JavaScript", "HTML"],
    timeEstimate: 1,
    domain: "Web Development",
    image: "project-78"
  },
  {
    id: "proj-114",
    title: "Simple Tabs Component",
    tagline: "Build a UI component to switch between different content panels.",
    description: "Create a tabbed interface where clicking on different tab buttons displays different panels of content. This is a foundational UI pattern for organizing information in a compact space.",
    requiredSkills: ["HTML/CSS", "JavaScript"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-21"
  },
  {
    id: "proj-115",
    title: "Digital Clock",
    tagline: "Display the current time, updating every second.",
    description: "Create a digital clock that displays the current local time and updates in real-time without needing to refresh the page. This is a classic exercise for using JavaScript's `setInterval` function.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 1,
    domain: "Web Development",
    image: "project-9"
  },
  {
    id: "proj-116",
    title: "Filtering a List of Items",
    tagline: "Build a real-time search filter for a list.",
    description: "Create a search box that dynamically filters a list of items on the page as the user types. This project demonstrates essential DOM manipulation and event handling skills.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-37"
  },
  {
    id: "proj-117",
    title: "Webcam Photo Booth",
    tagline: "Take snapshots using your computer's webcam.",
    description: "Build a fun app that accesses the user's webcam and allows them to take a picture. The captured image can then be displayed on the page or downloaded. This is a great introduction to the MediaDevices API.",
    requiredSkills: ["JavaScript", "MediaDevices API", "HTML5"],
    timeEstimate: 5,
    domain: "Web Development",
    image: "project-14"
  },
  {
    id: "proj-118",
    title: "Music Sequencer / Drum Machine",
    tagline: "Create simple beats and melodies in your browser.",
    description: "Build a grid-based music sequencer. Users can click on squares in a grid to program a simple drum beat or melody that plays in a loop. This project introduces you to the Web Audio API.",
    requiredSkills: ["JavaScript", "Web Audio API", "HTML/CSS"],
    timeEstimate: 8,
    domain: "Web Development",
    image: "project-13"
  },
  {
    id: "proj-119",
    title: "Password Strength Meter",
    tagline: "Provide visual feedback on password strength.",
    description: "Create a password input field that analyzes the password as the user types and provides feedback on its strength (e.g., 'weak', 'medium', 'strong') with a colored progress bar. This is a common and useful UX feature.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-76"
  },
  {
    id: "proj-120",
    title: "Rock, Paper, Scissors Game",
    tagline: "Play the classic game against the computer.",
    description: "Build the game Rock, Paper, Scissors. The user will choose an option, the computer will randomly choose one, and the application will declare a winner. This is a fun project for practicing basic logic and random number generation.",
    requiredSkills: ["JavaScript", "HTML/CSS"],
    timeEstimate: 2,
    domain: "Web Development",
    image: "project-15"
  },
  {
    id: "proj-121",
    title: "Simple Authentication with Spring Security",
    tagline: "Secure a Java backend application.",
    description: "Take a basic Spring Boot application and add user authentication using Spring Security. Implement a login page and protect certain API endpoints so they can only be accessed by logged-in users. Store user credentials in memory or in a simple database.",
    requiredSkills: ["Java", "Spring Boot", "Spring Security"],
    timeEstimate: 8,
    domain: "Backend Development",
    image: "project-49"
  },
  {
    id: "proj-122",
    title: "API Rate Limiter",
    tagline: "Implement a rate limiter for a web service using Go.",
    description: "Build a middleware for a Go web service that implements a rate limiting algorithm (like the token bucket algorithm). This is a crucial component for protecting backend services from being overwhelmed with requests.",
    requiredSkills: ["Go", "Middleware", "Algorithms", "Concurrency"],
    timeEstimate: 10,
    domain: "Backend Development",
    image: "project-46"
  },
  {
    id: "proj-123",
    title: "Public Transit Tracker",
    tagline: "See live locations of buses and trains in your city.",
    description: "Develop an application that pulls real-time data from your city's public transit API (if available) and displays the live locations of buses or trains on a map. This is a great exercise in working with real-time data and mapping libraries.",
    requiredSkills: ["JavaScript", "Mapping Libraries", "APIs", "Real-time Data"],
    timeEstimate: 13,
    domain: "Web Development",
    image: "project-45"
  },
  {
    id: "proj-124",
    title: "Subscription Tracker Dashboard",
    tagline: "Keep track of all your monthly subscriptions in one place.",
    description: "A simple dashboard to help users manage their recurring subscriptions (e.g., Netflix, Spotify). Users can add subscriptions, set their renewal dates, and see a summary of their monthly spending.",
    requiredSkills: ["Vue.js", "Firebase", "Data Visualization"],
    timeEstimate: 9,
    domain: "Web Development",
    image: "project-44"
  },
    {
    id: "proj-125",
    title: "Inventory Management System API",
    tagline: "A robust backend for tracking product inventory.",
    description: "Develop a microservice-based backend using Spring Boot for an inventory management system. This API will handle product stock, supplier information, and order processing. It should expose REST endpoints and be secured using Spring Security.",
    requiredSkills: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL", "REST APIs"],
    timeEstimate: 25,
    domain: "Backend Development",
    image: "project-5"
  },
  {
    id: "proj-126",
    title: "Event-Driven Microservices with Kafka",
    tagline: "Build a system of communicating services using event streaming.",
    description: "Create a set of microservices using Spring Boot that communicate asynchronously using Apache Kafka. One service could be a user service that produces an event on user creation, and another service consumes this event to send a welcome email.",
    requiredSkills: ["Java", "Spring Boot", "Apache Kafka", "Microservices", "Docker"],
    timeEstimate: 30,
    domain: "Backend Development",
    image: "project-12"
  },
  {
    id: "proj-127",
    title: "Online Banking API",
    tagline: "A secure and scalable API for a digital bank.",
    description: "Design and build a RESTful API using Spring Boot for a simplified online banking application. It should manage user accounts, transactions, and statements. Security is critical, so implement JWT-based authentication and proper data validation.",
    requiredSkills: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT"],
    timeEstimate: 28,
    domain: "Backend Development",
    image: "project-20"
  },
  {
    id: "proj-128",
    title: "Real-time Chat Application Backend",
    tagline: "Power a real-time chat app with WebSockets.",
    description: "Build the backend for a chat application using Node.js with Express.js and Socket.IO. The server will manage user connections, handle message broadcasting to rooms, and store message history.",
    requiredSkills: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "MongoDB"],
    timeEstimate: 16,
    domain: "Backend Development",
    image: "project-30"
  },
  {
    id: "proj-129",
    title: "Landing Page A/B Testing Tool",
    tagline: "Build a simple tool to test variations of a webpage.",
    description: "Create a small web application that allows a user to define two different versions of a simple landing page (e.g., different headlines) and then randomly serves one of the two versions to visitors, tracking which one gets more clicks on a call-to-action button.",
    requiredSkills: ["JavaScript", "HTML/CSS", "Cookies/LocalStorage"],
    timeEstimate: 5,
    domain: "Web Development",
    image: "project-3"
  },
  {
    id: "proj-130",
    title: "Pomodoro Timer Web App",
    tagline: "A simple timer to boost your productivity.",
    description: "Build a web-based Pomodoro timer that cycles through focused work sessions and short breaks. The app should have customizable timer lengths and send a browser notification when a session ends.",
    requiredSkills: ["JavaScript", "HTML/CSS", "Notifications API"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-38"
  },
  {
    id: "proj-131",
    title: "Personal Blog with a Static Site Generator",
    tagline: "Create a fast and secure personal blog.",
    description: "Set up a personal blog using a static site generator like Astro or Eleventy. You will learn how to work with Markdown for content, customize themes with CSS, and deploy the site to a free hosting provider.",
    requiredSkills: ["HTML/CSS", "Markdown", "Static Site Generator"],
    timeEstimate: 4,
    domain: "Web Development",
    image: "project-4"
  },
  {
    id: "proj-132",
    title: "Data Validation Library",
    tagline: "Write a small, reusable data validation library in TypeScript.",
    description: "Create a mini-library with functions to validate common data types, like checking if a string is a valid email, if a number is within a range, or if an object has required properties. This is a great exercise in writing clean, reusable TypeScript code.",
    requiredSkills: ["TypeScript", "Unit Testing"],
    timeEstimate: 5,
    domain: "Software Development",
    image: "project-21"
  },
  {
    id: "proj-133",
    title: "GitHub Profile Readme Generator",
    tagline: "Create beautiful GitHub profile READMEs with a simple form.",
    description: "Build a web form where users can enter their details (name, social links, skills) and the app generates a well-formatted Markdown file for their GitHub profile README. This project focuses on string manipulation and file generation in the browser.",
    requiredSkills: ["JavaScript", "HTML/CSS", "Bootstrap"],
    timeEstimate: 4,
    domain: "Web Development",
    image: "project-40"
  },
  {
    id: "proj-134",
    title: "Interactive SVG World Map",
    tagline: "Create a map where you can click on countries for more info.",
    description: "Use an SVG map of the world and JavaScript to make it interactive. When a user hovers over or clicks a country, display information about that country fetched from a public API (like REST Countries).",
    requiredSkills: ["JavaScript", "SVG", "APIs", "HTML/CSS"],
    timeEstimate: 5,
    domain: "Web Development",
    image: "project-45"
  },
  {
    id: "proj-135",
    title: "Contact Form with Serverless Backend",
    tagline: "Add a working contact form to a static site without a server.",
    description: "Create a simple HTML form and use a serverless function (e.g., Netlify Functions, AWS Lambda) to process the form submission. The function will take the form data and send you an email. This is a very common and practical use case for serverless.",
    requiredSkills: ["HTML/CSS", "JavaScript", "Serverless Functions"],
    timeEstimate: 3,
    domain: "Web Development",
    image: "project-18"
  },
  {
    id: "proj-136",
    title: "Basic API with Go and Gin",
    tagline: "Build a simple, high-performance REST API in Go.",
    description: "Create a 'Hello World' REST API using the Go programming language and the Gin framework. You'll set up a few basic endpoints (e.g., GET, POST) and learn the fundamentals of building web services in Go.",
    requiredSkills: ["Go", "REST APIs"],
    timeEstimate: 4,
    domain: "Backend Development",
    image: "project-46"
  },
  {
    id: "proj-137",
    title: "Python Script to Organize Files",
    tagline: "Automate cleaning up your downloads folder.",
    description: "Write a Python script that scans a directory (like your 'Downloads' folder) and organizes files into subfolders based on their file type (e.g., moving all `.jpg` files to an 'Images' folder and all `.pdf` files to a 'Documents' folder).",
    requiredSkills: ["Python", "Scripting"],
    timeEstimate: 2,
    domain: "Software Development",
    image: "project-19"
  }
];
