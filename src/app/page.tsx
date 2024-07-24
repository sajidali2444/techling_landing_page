import Calendar from "@/components/Calendar/Calendar";
import Footer from "@/components/Footer/Footer";
import QnaSection from "@/components/QnaSection/QnaSection";
import HomePage from "@/customPages/Home";

export default function Home() {
  const qnaData = [
    {
      question: "What is Web Application Development? ",
      answer:
        "Web application development refers to the creation of interactive software hosted on web servers, accessible through web browsers. This dynamic system enables users to interact with the interface while seamlessly transmitting data to the development team behind it.",
    },
    {
      question:
        "Why Choose Techling for Outsourcing Web Application Development Services?",
      answer: "abc",
    },
    {
      question: "What Determines the Cost of Web Application Development?",
      answer: "abc",
    },
    {
      question: "Which programming languages are used for web applications?",
      answer: "abc",
    },
    {
      question: "What Defines the Top Custom Web App Development Company?",
      answer: "abc",
    },
    {
      question: "Where Does Techling Extend Its Services?",
      answer: "abc",
    },
    {
      question: " In which areas does Techling provide its services? + + + + +",
      answer: "abc",
    },
  ];
  return (
    <div>
      <HomePage />
      <QnaSection heading="Web Development" qnaData={qnaData} />
      <Calendar />
      <Footer />
    </div>
  );
}

