import { useState } from 'react';
import { placementRounds } from '../../services/api';

const PlacementRounds = ({ rounds, jobId }) => {
  const [activeRounds, setActiveRounds] = useState(rounds);

  const handleParticipation = async (roundId, status) => {
    try {
      await placementRounds.updateParticipation(roundId, status);
      setActiveRounds(prev =>
        prev.map(round =>
          round.id === roundId
            ? { ...round, participation_status: status }
            : round
        )
      );
    } catch (error) {
      console.error('Failed to update participation:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Placement Rounds</h2>
      
      {activeRounds.length === 0 ? (
        <p className="text-gray-500">No placement rounds have been announced yet.</p>
      ) : (
        <div className="space-y-4">
          {activeRounds.map((round) => (
            <div
              key={round.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {round.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(round.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                {round.participation_status ? (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Participating
                  </span>
                ) : (
                  <button
                    onClick={() => handleParticipation(round.id, true)}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Participate
                  </button>
                )}
              </div>

              <div className="mt-4 text-gray-600">
                <p>{round.description}</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Location:</span>
                  <span className="ml-2">{round.location}</span>
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <span className="ml-2">{round.duration}</span>
                </div>
              </div>

              {round.requirements && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                    {round.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlacementRounds;
