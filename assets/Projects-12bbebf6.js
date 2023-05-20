import{j as i,I as g,m as h,F as p}from"./index-1eb2722d.js";const n=({image:t,title:o,description:s,viewCodeLink:e,liveLink:a,isComingSoon:r=!1,hasLiveDemo:l=!0})=>{const d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return i.jsx(g,{as:"div",threshold:.2,children:({ref:c,inView:m})=>i.jsxs(h.div,{ref:c,className:"flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow",variants:d,initial:"hidden",animate:m?"visible":"hidden",children:[i.jsxs("div",{className:"relative",children:[r&&i.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center rounded-lg",children:i.jsx("span",{className:"text-white text-lg font-semibold",children:"Coming Soon"})}),i.jsx("img",{src:t,alt:o,className:"w-64 h-40 object-cover rounded-lg mb-4"})]}),i.jsx("h3",{className:"text-lg font-semibold mb-2",children:o}),i.jsx("p",{className:"text-gray-600 mb-4",children:s}),i.jsxs("div",{className:"flex space-x-4",children:[i.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 transition-colors",children:"View Code"}),l?i.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-4 py-2 transition-colors",children:"Live Demo"}):i.jsx("button",{className:"bg-gray-300 text-gray-500 rounded-md px-4 py-2 cursor-not-allowed",disabled:!0,children:"Live Demo"})]})]})})},v=()=>{const t=[{id:1,title:"Be A Volunteer",description:'Be a Volunteer" is a comprehensive platform designed to connect volunteers and NGOs (Non-Governmental Organizations), bringing volunteer events to everyone. The project includes both a web application and a mobile app, offering convenient access to volunteer opportunities and serving as a marketing platform for NGOs.The project aims to bridge the gap between volunteers and NGOs by offering a centralized platform where users can discover volunteer opportunities and connect with organizations working towards social causes',coverImage:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684555116/Slice_6_isoqjy.png",codeLink:"https://github.com/JoelJaison394/Byte-Bites",liveLink:"https://github.com/JoelJaison394/Byte-Bites",isComingSoon:!0,hasLiveDemo:!1},{id:2,title:"Byte Bites",description:'Byte Bites" is a dynamic and feature-rich blogging platform designed to provide an engaging and user-friendly space for content creators to share their thoughts, ideas, and expertise. With a focus on simplicity and accessibility, Byte Bites aims to empower bloggers and readers alike to explore, discover, and interact within a vibrant community',coverImage:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684555115/byte-bites_ht3ce7.png",codeLink:"https://github.com/JoelJaison394/Byte-Bites",liveLink:"https://github.com/JoelJaison394/Byte-Bites",isComingSoon:!0,hasLiveDemo:!1}],o=[{id:1,title:"Owliee",description:'Owliee" is a simple and elegant website designed to showcase the writings, books, and book reviews of my friend. The website serves as a digital platform where visitors can explore and appreciate my friends literary works, get insights into her published books, and read her thoughtful book reviews',coverImage:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684555118/owliee_lzlr8k.png",codeLink:"https://github.com/JoelJaison394/Owliee",liveLink:"https://joeljaison.live/",isComingSoon:!1,hasLiveDemo:!0},{id:2,title:"Netflix-Clone",description:"This is a dynamic and immersive Netflix clone that offers an extensive collection of movies and TV shows for users to stream online. Inspired by the popular streaming platform, provides a seamless and user-friendly experience, allowing users to discover, watch, and enjoy their favorite movies and TV series from the comfort of their own homes",coverImage:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684555118/netflix_qilfbm.png",codeLink:"https://github.com/JoelJaison394/Netflix_Clone",liveLink:"https://netflix-clone-fb10a.web.app/",isComingSoon:!1,hasLiveDemo:!0}],s=[{id:1,title:"Waste Management Portal",description:"This is an innovative waste management portal designed to streamline the process of waste collection and disposal. The platform allows users to report and request waste collection services from their households, while administrators can efficiently manage and coordinate the collection process. WasteAway aims to promote proper waste management practices and contribute to a cleaner and healthier environment.",coverImage:"academic-project1.png",codeLink:"https://github.com/JoelJaison394/Waste-Management-Portal",liveLink:"https://github.com/JoelJaison394/Waste-Management-Portal",isComingSoon:!1,hasLiveDemo:!1},{id:2,title:"E-Guide",description:'"e-Guide" is an online platform designed to provide a comprehensive collection of resources for B-Tech students in the Computer Science (CS) branch under the Kerala Technological University (KTU) curriculum. The primary objective of e-Guide is to offer an extensive range of study materials, including textbooks, PDFs, previous year question papers, and other relevant resources to assist students in their academic journey.',coverImage:"https://res.cloudinary.com/dxraggwp4/image/upload/v1684555117/E-Guide_seabfh.png",codeLink:"https://github.com/JoelJaison394/E-guide",liveLink:"https://example.com/project6",isComingSoon:!0,hasLiveDemo:!1}];return i.jsx("section",{className:"py-12 bg_color",children:i.jsxs("div",{className:"container mx-auto",children:[i.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4 text-center",children:"Core Projects"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",children:t.map(e=>i.jsx(n,{image:e.coverImage,title:e.title,description:e.description,viewCodeLink:e.codeLink,liveLink:e.liveLink,isComingSoon:e.isComingSoon,hasLiveDemo:e.hasLiveDemo},e.id))}),i.jsx("h2",{className:"text-3xl font-bold text-gray-800 mt-12 mb-4 text-center",children:"Pet Projects"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",children:o.map(e=>i.jsx(n,{image:e.coverImage,title:e.title,description:e.description,viewCodeLink:e.codeLink,liveLink:e.liveLink,isComingSoon:e.isComingSoon,hasLiveDemo:e.hasLiveDemo},e.id))}),i.jsx("h2",{className:"text-3xl font-bold text-gray-800 mt-12 mb-4 text-center",children:"Academic Projects"}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",children:s.map(e=>i.jsx(n,{image:e.coverImage,title:e.title,description:e.description,viewCodeLink:e.codeLink,liveLink:e.liveLink,isComingSoon:e.isComingSoon,hasLiveDemo:e.hasLiveDemo},e.id))})]})})},x=()=>i.jsxs("div",{children:[i.jsx(v,{}),i.jsx(p,{})]});export{x as default};
