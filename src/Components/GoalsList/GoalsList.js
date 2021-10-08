import React from "react";
import "./GoalsList.css";
import Goal from "../Goal/Goal";
import { motion } from "framer-motion"

const GoalsList = ({ goalsList, goalsListSorted, handleSlideChange, handleDelete }) => {
  return (
      <motion.ul 
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{ duration: 0.35, staggerChildren: 1.1, type: 'tween'}}
      >
        {goalsListSorted.map((goalItem) => {
          return (
            <motion.li 
              key={goalItem.name} 
              layout
              transition={{ duration: 0.35, staggerChildren: 1.1, type: 'tween'}}
            >
              <Goal
              goal={goalItem}
              key={goalItem.name}
              id={goalItem.id}
              name={goalItem.name} 
              goalValue={goalItem.goalValue}
              measuring={goalItem.measuring} 
              done={goalItem.done} 
              goalFrequency={goalItem.goalFrequency}
              handleSlideChange={handleSlideChange}
              handleDelete={handleDelete}
              completed={goalItem.completed}
              color={goalItem.color}
            />
          </motion.li>
          )
        })}
      </motion.ul>
  );
};

export default GoalsList;
