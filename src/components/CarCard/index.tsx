import { CarTypes } from "../../types";
import CustomButton from "../CustomButton";
import { motion } from "framer-motion";
import DetailModal from "../DetailModal";
import { useState } from "react";

type CarCardProps = {
  car: CarTypes;
};

const CarCard = ({ car }: CarCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      <p className="flex mt-6">
        <span className="text-lg">$</span>
        <span className="text-2xl">
          {Math.round(Math.random() * 200) + 150}
        </span>
        <span className="text-base self-end">/day</span>
      </p>
      <div className="w-full h-40 my-4">
        <img src="/hero.png" className="w-full h-full object-contain" />
      </div>
      <div className="w-full flex mt-2">
        <div className="w-full flex justify-between group-hover:hidden">
          <div className="flex-center flex-col">
            <img src="/steering-wheel.svg" width={25} />
            <p>{car.transmission == "automatic" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex-center flex-col">
            <img src="/tire.svg" width={25} />
            <p>
              {car.drive == "fwd"
                ? "FWD"
                : car.drive == "rwd"
                ? "RWD"
                : car.drive == "awd"
                ? "AWD"
                : "4WD"}
            </p>
          </div>
          <div className="flex-center flex-col">
            <img src="/gas.svg" width={25} />
            <p>
              {car.fuel_type == "gas"
                ? "Autogas"
                : car.fuel_type == "diesel"
                ? "Diesel"
                : "electricity"}
            </p>
          </div>
        </div>
        <div className="group-hover:flex hidden w-full">
          <CustomButton
            title="More"
            styles="w-full"
            icon="/right-arrow.svg"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <DetailModal
        car={car}
        isModalOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default CarCard;
