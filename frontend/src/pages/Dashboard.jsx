import api from "../utils/api.js";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  const getGoalsFromAPI = async () => {
    setLoading(true);
    try {
      const response = await api.get("/goals");
      const allGoals = response.data;
      console.log(allGoals);
      setGoals(allGoals);
    } catch (error) {
      console.log("Error fetching", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGoalsFromAPI();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/goals", {
        text: goal,
      });
      console.log(response.data);
      getGoalsFromAPI();
      setGoal("");
    } catch (error) {
      console.log("Uable fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            My Goals Dashboard
          </h1>
          <p className="text-gray-400">Track and manage your goals</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-white text-xl">
              <div className="animate-pulse">Loading goals...</div>
            </div>
          </div>
        )}

        {/* Goals List */}
        {!loading && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="mb-6 max-w-md mx-auto">
              <label
                htmlFor="goalText"
                className="block text-md p-2 font-medium text-gray-300 mb-2"
              >
                What's your goal?
              </label>
              <input
                type="text"
                name="text"
                id="goalText"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-5/6 py-3 px-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-lg"
                placeholder="e.g., Learn React in 30 days"
              />
              <button
                onClick={handleSubmit}
                className="px-4 mx-1 py-4 bg-green-600 cursor-pointer text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors"
              >
                ADD
              </button>
            </div>
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">
                Your Goals ({goals.length})
              </h2>
            </div>

            <div className="p-6">
              {goals.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg mb-4">
                    No goals yet. Start by creating your first goal!
                  </p>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Create Goal
                  </button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {goals.map((goal) => (
                    <li
                      key={goal._id}
                      className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-lg font-medium">
                            {goal.text}
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
                            Created:{" "}
                            {new Date(goal.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors">
                            Edit
                          </button>
                          <button className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
