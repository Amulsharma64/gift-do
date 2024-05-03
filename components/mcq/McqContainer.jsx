"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import MCQ from "./Mcq";

const McqContainer = () => {
    const [rawData, setRawData] = useState({});
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const data = useMemo(() => [
      {
        question: 'What is relation of you with her/him?',
        options: [
          'Husband', 'Wife', 'Female Friend 💃', 'Male Friend 🕺',
          'Girlfriend', 'Boyfriend', 'Fiancee 💍', 'Fiance 💍', 'colleague',
          'Boss', 'Teacher', 'Classmate', 'Father', 'Mother', 'Brother',
          'Sister', 'Uncle','Aunt', 'Grandfather', 'Grandmother',
          'Nephew', 'Niece', 'Son', 'Daughter', 'Cousin Brother', 'Cousin Sister'
           //add latter this option
        ],
      },
      {
        question: 'What is the age of her/his?',
        options: ['0-5', '5-15', '15-20', '25-35', '35+'],
      },
      {
        question: 'Favrioute Color?',
        options: ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Pink'],
      },
      {
        question: 'What kind of person she/he is?',
        options: ['interovert', 'Extrovert', 'Shy', 'Cultured', 'Modern', 'Traditional'],
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
    //  console.log(data[0].question + " : " + rawData[data[0].question]);
    }
  
  
    const handleSubmit = () => { 
      console.log(rawData);
    }
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <MCQ
        question={data[count].question}
        options={data[count].options}
        onSelect={handleSelectOption}
        isSelected={selectedOption}
      />
      {
        data.length - 1 > count ? <button className="mt-4" onClick={handleNext}>Next</button> : <button className="mt-4" onClick={handleSubmit}>Submit</button>
      }
      {selectedOption && (
        <p className="mt-1 text-orange-400">You selected: {selectedOption}</p>
      )}
    </main>
  );
};

export default McqContainer;