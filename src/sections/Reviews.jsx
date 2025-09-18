import Marquee from "react-fast-marquee";
import ReviewCard from "../components/ReviewCard";

const reviews = [
    {
        name: "Sam taylor",
        username: "United States",
        body: "Rishabh was fantastic ! He followed all instructions and finished task in time and with great accuracy. He understo...",
    },
    {
        name: "Manav Gupta",
        username: "@mnvgupta",
        body: "Rishabh Completed the project on time and budget. He fix all issues and provided excellent support to us using his so...",
    },
    {
        name: "Bhavya Ranjan",
        username: "India",
        body: "Rishabh is very good at NodeJs and Html/Css/js wev development, I would like to hire him for long term project based jobs...",
    },
    {
        name: "Alex ",
        username: "@alex_dev",
        body: "Working with Rishabh was a great experience! He is very professional, communicates well, and delivers top-quality work...",
    }
];



export default function Reviews() {
    return (
        <div className="section reviews-section" id="testimonials">
            <h2>Reviews</h2>
            <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor="var(--clr-bg)">
                {reviews.map((review, index) => {
                    return <ReviewCard key={index} {...review} />;
                })}
            </Marquee>
        </div>
    )
}
