import React from "react";
import "./GoalsList.css";
import Goal from "../Goal/Goal";
import { motion } from "framer-motion"

const GoalsList = ({ goalsListSorted, handleSlideChange, handleDelete }) => {
  
  const variants = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: { duration: 0.2, staggerChildren: 0.05, type: 'tween' }
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      x: 75
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, type: 'tween', staggerChildren: 0.05 },
    },
  }

  return (
      <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
      >
        {goalsListSorted.map((goalItem) => {
          return (
            <motion.div 
              key={goalItem.name} 
              layout
              variants={item}
            >
              <Goal
              goal={goalItem}
              // key={goalItem.name}
              id={goalItem.id}
              name={goalItem.name} 
              icon={goalItem.icon}
              goalValue={goalItem.goalValue}
              measuring={goalItem.measuring} 
              done={goalItem.done} 
              goalFrequency={goalItem.goalFrequency}
              handleSlideChange={handleSlideChange}
              handleDelete={handleDelete}
              completed={goalItem.completed}
              color={goalItem.color}
            />
          </motion.div>
          )
        })}
      </motion.div>
  );
};

export default GoalsList;
