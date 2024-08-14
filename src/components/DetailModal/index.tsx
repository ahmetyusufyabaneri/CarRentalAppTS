import { CarTypes } from "../../types";
import { AnimatePresence, motion } from "framer-motion";

type DetailModalProps = {
  car: CarTypes;
  isModalOpen: boolean;
  close: () => void;
};

const DetailModal = ({ car, isModalOpen, close }: DetailModalProps) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 grid place-items-center">
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-6 bg-white w-full max-w-lg max-h-[90vh] rounded-xl flex flex-col gap-5 overflow-auto"
          >
            <button
              onClick={close}
              className="absolute p-1 top-1 end-1 z-10 rounded-full bg-white"
            >
              <img src="/close.svg" />
            </button>
            <div className="flex flex-1 flex-col gap-4">
              <div className="w-full h-40 bg-pattern bg-center rounded-lg">
                <img
                  src="/hero.png"
                  className="w-full h-full mx-auto object-contain"
                />
              </div>
              <div className="flex gap-6">
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    src="/hero.png"
                    alt={car.model}
                    className="w-full h-full mx-auto object-contain"
                  />
                </div>
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    src="/hero.png"
                    alt={car.model}
                    className="w-full h-full mx-auto object-contain"
                  />
                </div>
                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                  <img
                    src="/hero.png"
                    alt={car.model}
                    className="w-full h-full mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
            {Object.entries(car).map(([key, value], index) => (
              <div key={index} className="flex items-center justify-between">
                <h4 className="capitalize">{key.replace("_", " ")}</h4>
                <p className="capitalize font-bold">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
