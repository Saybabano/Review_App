let reviews=[
    {
        id:1,
        name:"Sangeeta Rathore",
        Job:"writer",
        img:"https://img.freepik.com/premium-photo/portrait-photo-asian-businesswoman-with-smiling-face-office_63106-194.jpg",
        text: "Generative AI helped me overcome writer's block and provided fresh ideas for my novel. It’s like having a creative partner who never runs out of suggestions."
    },
    {
        id:2,
        name:"Sana Khan",
        img:"https://img.freepik.com/premium-photo/laptop-portrait-business-woman-with-office-company-success-vision-workplace-development-human-resources-management-goals-hr-boss-leadership-trust-with-proud-face-working-desk_590464-115247.jpg",
        Job:"Graphic Designer",
        text:"I love how easy it is to create unique design elements with AI tools. The AI-generated patterns and textures have added a new dimension to my designs."
    },
    {
        id:3,
        name:"Nisha Yadav",
        img:"https://img.freepik.com/premium-photo/proud-formal-corporate-businesswoman-with-arms-crossed-showing-professional-leadership-marketing-strategy-presentation-smiling-employee-standing-company-boardroom-business-meeting_590464-77617.jpg",
        Job:"Music Producer",
        text: "Using AI to generate music loops has sped up my workflow tremendously. The AI can come up with melodies and beats that I wouldn't have thought of."
        
    },
    {
        id:4,
        name:"Eram Khan",
        img:"https://www.shutterstock.com/shutterstock/photos/1865153395/display_1500/stock-photo-portrait-of-young-smiling-woman-looking-at-camera-with-crossed-arms-happy-girl-standing-in-1865153395.jpg",
        Job:" Student",
        text:"The AI-assisted study guides are incredibly helpful for exam preparation. It creates summaries and practice questions that really target my weak areas."
    },
    {
        id:5,
        name:"Aisha Khan",
        img:"https://img.freepik.com/premium-photo/portrait-business-woman_1182691-3.jpg",
        Job:"Marketer",
        text:"AI-generated ad copy has boosted our campaign effectiveness and saved us time. The AI can quickly generate multiple versions of ad texts, making A/B testing much easier."
    },
    {
        id:6,
        name:"Chandni viswakarma",
        img:"https://media.gettyimages.com/id/1311655328/photo/im-the-best-asset-in-my-business.jpg?s=612x612&w=gi&k=20&c=JqBPjtbnDddDD-R3PqAJbonErBI6-Y1gg37lrkVeLnI=",
        Job:"Blogger",
        text:"I use AI to draft my blog posts, and it’s amazing how much time it saves. The AI helps structure my content and even suggests SEO-friendly keywords."
    },
    {
        id:7,
        name:"Deepti kumari",
        img:"https://www.shutterstock.com/image-photo/young-smiling-latin-girl-college-260nw-2151924839.jpg",
        Job:"Entrepreneur",
        text:"The AI chatbot on our website has improved customer engagement significantly. It answers common questions instantly, freeing up our support team for more complex issues."
    },
    {
        id:8,
        name:"Shilpi mathur",
        img:"https://www.shutterstock.com/image-photo/photo-beautiful-young-business-woman-260nw-1906641364.jpg",
        Job:"Artist",
        text:"AI art generators are a fantastic source of inspiration for my paintings. They help me explore new styles and techniques that I might not have considered otherwise."
    },
    


]
let img = document.querySelector(".img-container img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let btn = document.querySelector(".btn");
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    if (reviews.length === 0) {
        console.error("No reviews to display");
        return;
    }
    
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

btn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});
