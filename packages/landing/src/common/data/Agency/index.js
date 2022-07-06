import BlogImage1 from "../../assets/image/agency/blog/blog-img1.png";
import BlogImage2 from "../../assets/image/agency/blog/blog-img2.png";
import BlogImage3 from "../../assets/image/agency/blog/blog-img3.png";
import Member1 from "../../assets/image/agency/team/member-1.jpg";
import Member2 from "../../assets/image/agency/team/member-2.jpg";
import Member3 from "../../assets/image/agency/team/member-3.jpg";
import Denny from "../../assets/image/agency/client/denny.png";
import Menny from "../../assets/image/agency/client/menny.png";
import CreditCards from "../../../common/assets/image/iicons/creditcard.png";

const data = {
  menuItems: [
    {
      label: "Feature",
      path: "#featureSection",
      offset: "80",
    },
    {
      label: "Work History",
      path: "#workHistorySection",
      offset: "67",
    },
    {
      label: "Portfolio",
      path: "#blogSection",
      offset: "67",
    },
    {
      label: "Quality feature",
      path: "#qualitySection",
      offset: "67",
    },
    {
      label: "Testimonial",
      path: "#testimonialSection",
      offset: "100",
    },
    {
      label: "Team Member",
      path: "#teamSection",
      offset: "67",
    },
    {
      label: "FAQ",
      path: "#faqSection",
      offset: "67",
    },
  ],
  aboutus: [
    {
      id: 1,
      title: "Amazing communication experience.",
      icon: "flaticon-next",
    },
    {
      id: 2,
      title: "Best designing experience with trending tools and sizes.",
      icon: "flaticon-next",
    },
    {
      id: 3,
      title: "Training and communication method remotely.",
      icon: "flaticon-next",
    },
    {
      id: 4,
      title: "24/7 Hour onine supports.",
      icon: "flaticon-next",
    },
  ],
  features: [
    {
      id: 1,
      icon: "../../../common/assets/image/iicons/creditcard.png",
      title: "Best of Credit Cards",
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Best of Investing",
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Best of Insurance",
    },
    {
      id: 4,
      icon: "flaticon-startup",
      title: "Best of Student Loans",
    },
    {
      id: 5,
      icon: "flaticon-briefing",
      title: "Best of Mortgages",
    },
    {
      id: 6,
      icon: "flaticon-creative",
      title: "Best of Personal Loans",
    },
    {
      id: 7,
      icon: "flaticon-creative",
      title: "Best of Banking",
    },
    {
      id: 8,
      icon: "flaticon-creative",
      title: "Best of Travel",
    },
    {
      id: 9,
      icon: "flaticon-creative",
      title: "Best of Small business",
    },
    {
      id: 10,
      icon: "flaticon-creative",
      title: "Best of Auto Loans",
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: "flaticon-flask",
      title: "Search Optimization",
    },
    {
      id: 2,
      icon: "flaticon-pencil-case",
      title: "Wireframing Task",
    },
    {
      id: 3,
      icon: "flaticon-ruler",
      title: "Ui/Ux Design",
    },
    {
      id: 4,
      icon: "flaticon-briefing",
      title: "Content Writting",
    },
  ],
  blog: [
    {
      id: 1,
      title: "Real home corporation",
      thumbnail_url: BlogImage1,
      date: "November 02, 2018",
      postLink: "#1",
    },
    {
      id: 2,
      title: "Sheltech developer ltd.",
      thumbnail_url: BlogImage2,
      date: "November 12, 2018",
      postLink: "#2",
    },
    {
      id: 3,
      title: "Alt architecture co.",
      thumbnail_url: BlogImage3,
      date: "December 09, 2018",
      postLink: "#3",
    },
  ],
  teamMember: [
    {
      id: 1,
      name: "Jessica Fanddy",
      thumbnail_url: Member1,
      designation: "Co Founder",
      social_links: [
        {
          id: 1,
          icon: "flaticon-facebook-logo",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-twitter-logo-silhouette",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-instagram",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-dribble-logo",
          url: "#",
        },
      ],
    },
    {
      id: 2,
      name: "Devid Justingul",
      thumbnail_url: Member2,
      designation: "Senior Ui/UX Designer",
      social_links: [
        {
          id: 1,
          icon: "flaticon-facebook-logo",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-twitter-logo-silhouette",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-instagram",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-dribble-logo",
          url: "#",
        },
      ],
    },
    {
      id: 3,
      name: "Handdy Albuzz",
      thumbnail_url: Member3,
      designation: "Article Writer",
      social_links: [
        {
          id: 1,
          icon: "flaticon-facebook-logo",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-twitter-logo-silhouette",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-instagram",
          url: "#",
        },
        {
          id: 1,
          icon: "flaticon-dribble-logo",
          url: "#",
        },
      ],
    },
  ],
  testimonial: [
    {
      id: 1,
      name: "Jon Doe",
      designation: "CEO of Denish Co.",
      comment:
        "Best working experience  with this amazing team & in future, we want to work together",
      avatar_url: Denny,
    },
    {
      id: 2,
      name: "Roman Ul Oman",
      designation: "Co-founder of QatarDiaries",
      comment:
        "Impressed with master class support of the team and really look forward for the future.",
      avatar_url: Menny,
    },
    {
      id: 3,
      name: "Jone Doe",
      designation: "Director of Beauty-queen",
      comment:
        "I have bought more than 10 themes on ThemeForest, and this is the first one I review. Wow! Amazing React Theme",
      avatar_url: Denny,
    },
    {
      id: 4,
      name: "Roman Ul Oman",
      designation: "Co-founder of QatarDiaries",
      comment:
        "Impressed with master class support of the team and really look forward for the future.",
      avatar_url: Menny,
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: "How to contact with Customer Service?",
      description:
        "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ",
    },
    {
      id: 2,
      title: "App installation failed, how to update system information?",
      description:
        "Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ",
    },
    {
      id: 3,
      title: "Website reponse taking time, how to improve?",
      description:
        "At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .",
    },
    {
      id: 4,
      title: "New update fixed all bug and issues?",
      description:
        "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .",
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: "Company",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "About",
        },
        {
          id: 2,
          url: "#2",
          text: "Affiliate",
        },
        {
          id: 3,
          url: "#3",
          text: "Careers & Culture",
        },
        {
          id: 4,
          url: "#4",
          text: "Blogs",
        },
        {
          id: 5,
          url: "#5",
          text: "Press",
        },
      ],
    },
    {
      id: 2,
      title: "About Us",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Support Center",
        },
        {
          id: 2,
          url: "#2",
          text: "Customer Support",
        },
        {
          id: 3,
          url: "#2",
          text: "About Us",
        },
        {
          id: 4,
          url: "#4",
          text: "Copyright",
        },
        {
          id: 5,
          url: "#5",
          text: "Popular Campaign",
        },
      ],
    },
    {
      id: 3,
      title: "Our Information",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Return Policy",
        },
        {
          id: 2,
          url: "#2",
          text: "Privacy Policy",
        },
        {
          id: 3,
          url: "#3",
          text: "Terms & Condtitions",
        },
        {
          id: 4,
          url: "#4",
          text: "Site Map",
        },
        {
          id: 5,
          url: "#5",
          text: "Store Hours",
        },
      ],
    },
    {
      id: 4,
      title: "My Account",
      menuItems: [
        {
          id: 1,
          url: "#1",
          text: "Press Inquiries",
        },
        {
          id: 2,
          url: "#2",
          text: "Social Media",
        },
        {
          id: 3,
          url: "#3",
          text: "Directories",
        },
        {
          id: 4,
          url: "#4",
          text: "Images & B-roll",
        },
        {
          id: 5,
          url: "#5",
          text: "Permissions",
        },
      ],
    },
    // {
    //   id: 5,
    //   title: "Policy",
    //   menuItems: [
    //     {
    //       id: 1,
    //       url: "#1",
    //       text: "Application Security",
    //     },
    //     {
    //       id: 2,
    //       url: "#2",
    //       text: "Software principles",
    //     },
    //     {
    //       id: 3,
    //       url: "#3",
    //       text: "Unwanted Sofware Policy",
    //     },
    //     {
    //       id: 4,
    //       url: "#4",
    //       text: "Responsible supply chain",
    //     },
    //   ],
    // },
  ],
  social_profile: [
    {
      id: 1,
      icon: "flaticon-facebook-logo",
      link: "#1",
    },
    {
      id: 2,
      icon: "flaticon-twitter-logo-silhouette",
      link: "#2",
    },
    {
      id: 3,
      icon: "flaticon-instagram",
      link: "#3",
    },
    {
      id: 4,
      icon: "flaticon-tumblr-logo",
      link: "#4",
    },
    {
      id: 5,
      icon: "flaticon-dribble-logo",
      link: "#5",
    },
  ],
};
export default data;
