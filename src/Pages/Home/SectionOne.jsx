import { motion } from "framer-motion";
import { useContext } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SectionOne = () => {
  const{theme} = useContext(AuthContext)
  return (

    <div className={`py-12 px-6 ${theme === 'dark'? 'text-white' : ''}`}>
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaHandsHelping className="text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold">Why Volunteer With Us?</h2>
        <p className="mt-4 text-lg">
          Volunteering connects you with meaningful causes while making a
          difference in the lives of others. Our platform ensures your efforts
          have a lasting impact.
        </p>
      </motion.div>
      <motion.div
        className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {["Community Impact", "Build Skills", "Make Connections"].map(
          (title, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#228d79] to-[#148161] shadow-2xl border-b-4 p-6 rounded-lg text-center text-white"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2">
                {title === "Community Impact" &&
                  "Be a catalyst for positive change in your community."}
                {title === "Build Skills" &&
                  "Gain valuable experience and grow your skillset."}
                {title === "Make Connections" &&
                  "Meet like-minded individuals and expand your network."}
              </p>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default SectionOne;
