import React from "react";
import Card from "./components/Card";
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Cupertino, USA",
  },
  {
    brandLogo:
      "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Bangalore, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQTObLQm9LCWITUQUIQ12wTrAD7ri7kHwKQ&s",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Backend Engineer (Node.js)",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Cloud DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Los Gatos, USA",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Azure Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sYXeIVDVKMwpoYJh-dtKXdnylp4I1Tb7Jw&s",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Austin, USA",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Delhi, India",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9wxltvknWWoDk3SLvvpQMLIm9XlZgr1g7A&s",
    companyName: "NVIDIA",
    datePosted: "9 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Santa Clara, USA",
  },
  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAx4OMNKDO78w1GtSY9IKw8zy3RPjRMbWyg&s",
    companyName: "Salesforce",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Pune, India",
  },
];



  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return (
          <div key = {idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
