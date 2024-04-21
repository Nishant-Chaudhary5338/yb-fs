import React, { useState } from 'react';

const MealFinder = () => {
  const [searchInput, setSearchInput] = useState('');
  const [mealList, setMealList] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const searchMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          setMealList(data.meals);
        } else {
          setMealList([]);
        }
      });
  };

  const showMealDetails = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(response => response.json())
      .then(data => setSelectedMeal(data.meals[0]));
  };

  const closeMealDetails = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="container mx-auto text-center px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Find Meals For Your Ingredients</h2>
          <blockquote className="text-lg text-gray-600 mb-4">Real food doesn't have ingredients, real food is ingredients.<br />- Jamie Oliver</blockquote>
          <div className="flex items-center">
            <input 
              type="text" 
              className="flex-1 bg-gray-100 rounded-l-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Enter an ingredient" 
              value={searchInput}
              onChange={handleInputChange}
            />
            <button 
              type="button" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-r-lg transition duration-300" 
              onClick={searchMeal}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Search Results:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mealList.map(meal => (
              <div key={meal.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{meal.strMeal}</h3>
                  <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300" 
                    onClick={() => showMealDetails(meal.idMeal)}
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedMeal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl">
              <button 
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition duration-300" 
                onClick={closeMealDetails}
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{selectedMeal.strMeal}</h2>
                <p className="text-gray-600 mb-4">{selectedMeal.strCategory}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-bold">Instructions:</h3>
                  <p>{selectedMeal.strInstructions}</p>
                </div>
                <div>
                  <img src={selectedMeal.strMealThumb} alt="" className="w-full rounded-lg mb-4" />
                </div>
                <div>
                  <a 
                    href={selectedMeal.strYoutube} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealFinder;
