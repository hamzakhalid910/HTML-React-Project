import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function getFormData(e) {
    e.preventDefault();
  }

  const [data, setData] = useState([]);
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const addData = () => {
    if (subject.trim() !== "" && marks.trim() !== "") {
      setData([...data, { subject: subject, marks: marks }]);
      setSubject("");
      setMarks("");
      console.log(subject);
    } else {
      alert("Please eneter both subject and marks");
    }
  };

  const images = [
    "/Images/1.jpg",
    "/Images/2.jpg",
    "/Images/3.jpg",
    "Images/4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current image index

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="Container">
        <h1>Matric Result Card</h1>
        <p>2024</p>

        <table id="resultTable">
          <tr>
            <td colspan="2">Roll no: 001</td>
            <td colspan="2">Status: Pass</td>
          </tr>

          <tr>
            <td colspan="2">Name: Hamza Khalid</td>
            <td colspan="2">Father Name: Khalid</td>
          </tr>

          <tr>
            <td colspan="4">Group: Computer Sceince</td>
          </tr>

          <th>Subjet Name</th>
          <th>TotalMarks</th>
          <th>Marks Obtained</th>
          <th>Grades</th>

          <tr>
            Urdu
            <td>100</td>
            <td>80</td>
            <td>80%</td>
          </tr>
          <tr>
            English
            <td>100</td>
            <td>80</td>
            <td>80%</td>
          </tr>
          <tr>
            Math
            <td>100</td>
            <td>80</td>
            <td>80%</td>
          </tr>
          <tr>
            Physics
            <td>100</td>
            <td>80</td>
            <td>80%</td>
          </tr>

          <tr>
            Total
            <td colspan="3">400/500</td>
          </tr>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{item.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />

      <div className="entryForm">
        <h2>Entry Form</h2>
        <form onSubmit={getFormData}>
          <label htmlFor="subjectInput">Subject: </label>
          <input
            type="text"
            id="subjectInput"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label htmlFor="subjectInput">Marks: </label>
          <input
            type="text"
            value={marks}
            id="marksInput"
            onChange={(e) => setMarks(e.target.value)}
          />
          <button onClick={addData}>Submit</button>
        </form>
      </div>

      <div>
        <h1>Image Slider</h1>
        <div className="slider">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="img"
          />
        </div>
        <div className="buttons">
          <button onClick={prevImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
