import { FiPlus } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { LocationCard } from '../location/LocationCard';
import { Button } from '../shared/Button';

export const Step2Entladestellen = () => {
  const {
    data,
    addEntladestelle,
    removeEntladestelle,
    updateEntladestelle,
    reorderEntladestelle,
  } = useCalculatorStore();

  const { entladestellen } = data;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Entladestellen
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wo soll das Umzugsgut abgeliefert werden?
        </p>
      </div>

      {/* Location Cards */}
      <div className="space-y-4 mb-6">
        {entladestellen.map((location, index) => (
          <LocationCard
            key={location.id}
            location={location}
            index={index}
            totalLocations={entladestellen.length}
            onUpdate={(updates) => updateEntladestelle(location.id, updates)}
            onRemove={() => removeEntladestelle(location.id)}
            onReorder={(direction) => reorderEntladestelle(location.id, direction)}
            canRemove={entladestellen.length > 1}
          />
        ))}
      </div>

      {/* Add Location Button */}
      <Button
        variant="outline"
        onClick={addEntladestelle}
        className="flex items-center gap-2"
      >
        <FiPlus size={20} />
        Weitere Entladestelle hinzufügen
      </Button>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Tipp:</strong> Fügen Sie alle Orte hinzu, an denen Umzugsgut abgeliefert werden soll.
          Die Reihenfolge können Sie mit den Pfeiltasten anpassen.
        </p>
      </div>
    </div>
  );
};
