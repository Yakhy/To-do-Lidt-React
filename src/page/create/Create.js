import React from "react";
import "./Create.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const { mode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title,
      method,
      cookingTime: cookingTime + " year",
      // ingredients,
    };
    try {
      await projectFirestore.collection("todo").add(doc);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const addItem = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prev) => [...prev, ing]);
    }
    setNewIngredient("");
  };

  return (
    <div className={`create ${mode}`}>
      <h1 className={`${mode}`}>Add a new to do</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span className={`${mode}`}>to do title:</span>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>
        <label>
          {/* <span className={`${mode}`}>Add ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
              value={newIngredient}
            />
            <button onClick={addItem}>Add</button>
          </div> */}
        </label>
        {/* <p className={`${mode}`}>
          Ingredients:
          {ingredients.map((i) => (
            <em key={i}> {i},</em>
          ))}
        </p> */}
        <label >
          <span className={`${mode}`}>To do text-area:</span>
          <textarea className="text-area"
            type="text"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            required
          />
        </label>
         <label>
          <span className={`${mode}`}>List created date:</span>
          <input
            type="string"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
