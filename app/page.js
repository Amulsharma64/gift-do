"use client";
import Image from "next/image";
import MCQ from "../components/mcq/Mcq";
import { useMemo, useState } from "react";

export default function Home() {
  const [rawData, setRawData] = useState({});
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log("Hello World");
  
  const data = useMemo(() => [
    {
      question: 'What is relation of you with her/him?',
      options: [
        'Father', 'Mother', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Grandfather', 
        'Grandmother', 'Cousin', 'Nephew', 'Niece', 'Son', 'Daughter', 'Husband', 
        'Wife', 'Friend', 'Best Friend'
      ],
    },
    {
      question: 'Select Gender',
      options: ['Male', 'Female', 'other'],
    },
    {
      question: 'What is the age of her/his?',
      options: ['0-5', '5-15', '15-20', '25-35', '35+'],
    },
    {
      question: 'Select City',
      options: ['Jaipur', 'Patna', 'Noida', 'Delhi'],
    },
  ], []);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setRawData((prev) => ({
      ...prev,
      [data[count].question]: option,
    }));
  };

  const handleNext = () => {
    setCount((prevCount) => prevCount + 1);
    setSelectedOption(null); // Reset selected option when moving to the next question
  }

  const handleSubmit = () => {
   
    console.log(rawData);
    // setSelectedOption(null);
    console.log(selectedOption);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl font-bold mb-0">Hello World</h1>
      <MCQ
        question={data[count].question}
        options={data[count].options}
        onSelect={handleSelectOption}
      />
      {
        data.length - 1 > count ? <button onClick={handleNext}>Next</button> : <button onClick={handleSubmit}>Submit</button>
      }
      {selectedOption && (
        <p className="mt-4">You selected: {selectedOption}</p>
      )}
    </main>
  );
}
