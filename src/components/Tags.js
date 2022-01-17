import React, {useEffect} from "react";
//import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

export default function Tags({tags, setTags}) {
  
 
  useEffect( async () => {
    const response = await fetch(`http://localhost:3001/skills`);
    const body = await response.json();
    const skills = body.map(skill => skill.sk_name);
    setTags(skills);
  } , []);
  

  return (
    <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
    />
  )
}

