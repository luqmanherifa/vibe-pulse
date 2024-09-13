import { useState } from "react";
import suggestionsData from "../data/suggestions.json";
import reflectionData from "../data/reflection.json";
import activitiesData from "../data/activities.json";
import moodsData from "../data/moods.json";

function Mood() {
  const [mood, setMood] = useState("");
  const [showReflection, setShowReflection] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const [activities, setActivities] = useState({
    emotion: "",
    sleep: "",
    health: "",
    eating: "",
  });

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setShowReflection(true);
  };

  const handleChoiceSelect = () => {
    setShowReflection(false);
    setShowActivity(true);
  };

  const handleActivitySelect = (category, value) => {
    setActivities((prevActivities) => ({
      ...prevActivities,
      [category]: value,
    }));
  };

  const handleSubmitActivity = () => {
    setShowActivity(false);
    setShowSuggestions(true);
  };

  return (
    <div className="min-h-screen max-w-96 mx-auto bg-white">
      <div>
        {!showReflection && !showSuggestions && !showActivity && (
          <div className="ml-8 mr-8 pt-8">
            <div className="flex items-center mb-6">
              <span className="w-12 h-12 bg-bee rounded-full mr-5"></span>{" "}
              <h1 className="text-2xl font-normal text-eel w-60 font-bricolage">
                Bagaimana kabarmu sekarang?
              </h1>
            </div>
            <p className="text-xl font-medium mb-4 text-eel">
              Pilih gambaran perasaanmu
            </p>
            <div className="flex flex-col gap-3">
              {moodsData.moods.map((mood) => (
                <button
                  key={mood.type}
                  className="flex items-center text-eel text-lg font-medium px-6 py-4 rounded-xl border-swan border-2 hover:border-humpback hover:bg-blue-50 hover:text-humpback text-left"
                  onClick={() => handleMoodSelect(mood.type)}
                >
                  <span
                    className="w-7 h-7 rounded-full mr-3"
                    style={{ backgroundColor: mood.color }}
                  ></span>
                  {mood.type}
                </button>
              ))}
            </div>
          </div>
        )}

        {showReflection && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Refleksi Singkat</h2>
            <p className="mb-4">Pilih salah satu pertanyaan di bawah ini:</p>
            <div className="flex flex-col gap-2">
              {reflectionData[mood]?.map((choice, index) => (
                <button
                  key={index}
                  className="bg-green-500 text-white px-4 py-2 rounded shadow"
                  onClick={() => handleChoiceSelect(choice)}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        )}

        {showActivity && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
              Catat Aktivitas Hari Ini
            </h2>

            {Object.keys(activitiesData).map((category) => (
              <div className="mb-4" key={category}>
                <h3 className="text-lg font-semibold">
                  {category.charAt(0).toUpperCase() + category.slice(1)}:
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {activitiesData[category].map((option) => (
                    <button
                      key={option}
                      className={`px-4 py-2 rounded shadow ${
                        activities[category] === option
                          ? "bg-blue-700"
                          : "bg-blue-500"
                      } text-white`}
                      onClick={() => handleActivitySelect(category, option)}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              className="bg-green-500 text-white px-4 py-2 rounded shadow mt-4"
              onClick={handleSubmitActivity}
            >
              Simpan Aktivitas
            </button>
          </div>
        )}

        {showSuggestions && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Terima Kasih!</h2>
            <p>{suggestionsData[mood]}</p>
          </div>
        )}

        <div className="fixed bottom-0 left-0 w-full pb-8 text-center">
          <button class="relative bg-bee border-0 border-b-4 border-transparent rounded-xl text-white font-bold text-base uppercase px-5 py-3 transition-all duration-200 hover:brightness-110 active:border-b-0 active:pb-[10px] disabled:cursor-auto focus:outline-none">
            Lanjutkan
            <span class="absolute inset-0 bg-yellow-600 border-0 border-b-4 border-transparent rounded-xl -z-10"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mood;
