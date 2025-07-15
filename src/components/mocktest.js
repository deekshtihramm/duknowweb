import React, { useState } from "react";
import "./MockTestPage.css";
import Header from "./header";
import {useNavigate} from "react-router-dom";

const exams = [
  {
    id: "upsc",
    name: "UPSC",
    syllabus: "General Studies, CSAT, Essay, Optional Subjects",
    duration: "2 hours per paper",
    marks: "1800 total (Prelims + Mains)",
    pattern: "Prelims (Objective), Mains (Descriptive), Interview",
    eligibility: "Graduation from any recognized university",
  },
  {
    id: "police",
    name: "Police SI/Constable",
    syllabus: "Reasoning, Aptitude, GK, English, Physical Test",
    duration: "90 minutes (written)",
    marks: "200 marks",
    pattern: "Written Test + Physical Measurement Test + Physical Efficiency Test",
    eligibility: "10+2 (Constable), Graduation (SI)",
  },
  {
    id: "appsc",
    name: "APPSC",
    syllabus: "Indian Polity, Economy, History, Geography, Current Affairs",
    duration: "2.5 hours per paper",
    marks: "450–600 marks (varies by post)",
    pattern: "Prelims + Mains + Interview",
    eligibility: "Graduation",
  },
  {
    id: "tspsc",
    name: "TSPSC",
    syllabus: "Telangana History, Constitution, Polity, Economy, GK",
    duration: "2.5 hours per paper",
    marks: "300–600 marks",
    pattern: "Prelims + Mains",
    eligibility: "Graduation",
  },
  {
    id: "ssc",
    name: "SSC CGL/CHSL",
    syllabus: "Quantitative Aptitude, Reasoning, English, General Awareness",
    duration: "60–120 minutes (per tier)",
    marks: "Tier-I: 200, Tier-II: Varies by post",
    pattern: "Tiered Objective Tests + Descriptive + Skill Test (if applicable)",
    eligibility: "10+2 (CHSL), Graduation (CGL)",
  },
  {
    id: "rrb",
    name: "RRB NTPC/JE/ALP",
    syllabus: "Maths, Reasoning, General Awareness, Technical Subjects (for JE/ALP)",
    duration: "90–120 minutes",
    marks: "100–120 marks (Stage-wise)",
    pattern: "Stage 1 CBT + Stage 2 CBT + Skill/Typing/Medical Test",
    eligibility: "10+2/Diploma/Degree depending on post",
  },
  {
    id: "defence",
    name: "Defence (NDA/CDS)",
    syllabus: "Maths, English, General Ability, Intelligence Test",
    duration: "2.5 hours per paper",
    marks: "900 (Written) + 900 (SSB)",
    pattern: "Written Exam + SSB Interview + Medical",
    eligibility: "12th Pass (NDA), Graduation (CDS)",
  },
  {
    id: "ibps",
    name: "IBPS PO/Clerk/SO",
    syllabus: "Reasoning, Quantitative Aptitude, English, Banking Awareness",
    duration: "60–120 minutes",
    marks: "100–200 marks (varies by stage)",
    pattern: "Prelims + Mains + Interview (for PO/SO)",
    eligibility: "Graduation",
  },
  {
    id: "rbi",
    name: "RBI Grade B/Assistant",
    syllabus: "English, Reasoning, Quant, General Awareness, Finance & Economics (Grade B)",
    duration: "60–120 minutes",
    marks: "300–600 marks",
    pattern: "Prelims + Mains + Interview",
    eligibility: "Graduation with specific % (for Grade B)",
  },
  {
    id: "group1",
    name: "Group 1 (AP/TS)",
    syllabus: "History, Polity, Economy, Geography, Ethics, Science, Current Affairs",
    duration: "2.5 hours per paper",
    marks: "Prelims: 150, Mains: 750, Interview: 100",
    pattern: "Prelims + Mains + Interview",
    eligibility: "Graduation",
  },
  {
    id: "group2",
    name: "Group 2 (AP/TS)",
    syllabus: "General Studies, History, Polity, Economy, Mental Ability",
    duration: "2.5 hours per paper",
    marks: "Prelims: 150, Mains: 450",
    pattern: "Written Test + Document Verification",
    eligibility: "Graduation",
  },
  {
    id: "group3",
    name: "Group 3 (AP/TS)",
    syllabus: "History, Polity, Rural Development, Aptitude, Current Affairs",
    duration: "2.5 hours per paper",
    marks: "450 marks",
    pattern: "Written Test",
    eligibility: "Graduation",
  },
  {
    id: "group4",
    name: "Group 4 (AP/TS)",
    syllabus: "General Knowledge, Secretarial Abilities, Mental Ability, English",
    duration: "150 minutes",
    marks: "300 marks",
    pattern: "Written Test + Document Verification",
    eligibility: "10+2 / Degree",
  },
  {
    id: "jee",
    name: "JEE Mains",
    syllabus: "Maths, Physics, Chemistry (Class 11 & 12 syllabus)",
    duration: "3 hours",
    marks: "300 marks",
    pattern: "Computer-Based Objective Test",
    eligibility: "10+2 with Physics, Chemistry, Maths",
  },
];



const MockTestPage = () => {
  const navigate = useNavigate();
  const [selectedExam, setSelectedExam] = useState(exams[0]);
  const startexam = (examId) => {
    navigate(`/exam/${examId}`); 
    // Logic to start the exam, e.g., redirecting to the exam page
    console.log(`Starting exam with ID: ${examId}`);
    // You can use history.push or navigate to redirect to the exam page
  };

  return (
    <>
      <Header />
      <div className="mock-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Mock Test</h2>
          <div className="exam-buttons">
            {exams.map((exam) => (
              <button
                key={exam.id}
                className={`exam-btn ${selectedExam.id === exam.id ? "active" : ""}`}
                onClick={() => setSelectedExam(exam)}
              >
                {exam.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="exam-details">
          <h3>{selectedExam.name}</h3>
          <p><strong>Syllabus:</strong> {selectedExam.syllabus}</p>
          <p><strong>Duration:</strong> {selectedExam.duration}</p>
          <p><strong>Total Marks:</strong> {selectedExam.marks}</p>
          <p><strong>Pattern:</strong> {selectedExam.pattern}</p>
          <p><strong>Eligibility:</strong> {selectedExam.eligibility}</p>

          <button className="start-btn" onClick={() => startexam(selectedExam.id)}>
           Start Exam
          </button>
        </main>


      </div>
    </>
  );
};

export default MockTestPage;
