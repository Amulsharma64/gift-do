
const MCQ = ({ question, options, onSelect}) => {
    // console.log(question, options, onSelect);
    console.log("mcq render");
  return (
    <div className="bg-white shadow-md rounded-md p-6 m-0">
      {/* Question */}
      <h2 className="text-lg font-semibold mb-4 col text-black">{question}</h2>
      {/* Options */}
      <div>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="radio"
              id={`option-${index}`}   
              name="mcq-option"
              value={option}
              onChange={() => onSelect(option)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-black">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQ;
