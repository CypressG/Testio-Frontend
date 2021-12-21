import photo from "../images/test_background.jpg";
import avatar from "../images/avatar.png";
import questionmark from "../images/question.svg";
import timeImage from "../images/time.svg";
import flag from "../images/flag.svg";

import Button from "../components/Button";

// Did it worked?
import { useEffect, useState } from "react";

const TestBlock = (props) => {
  const [category, setCategory] = useState([]);

  let count = props.question_count;
  if (count <= 0) {
    count = "Nėra";
  }

  let time = props.time;
  if (time <= 0) {
    time = "Neribota";
  } else {
    time = `${props.time} min.`;
  }

  let progress = props.progress + "%";

  useEffect(() => {
    fetch(
      `https://testioapi.herokuapp.com/api/tests/categories/${props.category_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCategory(data.name);
      });
  }, []);

  return (
    <div className="testblock-container">
      <div className="testblock-label-container">
        <div className="testblock-label-questionmark-container">
          <img src={questionmark} alt="questionmark" />
          <h5>{count}</h5>
        </div>
        <div className="testblock-label-time-container">
          <img src={timeImage} alt="questionmark" />
          <h5>{time}</h5>
        </div>
        <div className="testblock-label-flag-container">
          <img src={flag} alt="questionmark" />
          <h5>{progress}</h5>
        </div>
      </div>

      <div className="testblock-image-container">
        <img src={photo} alt="hills" />
      </div>
      <div className="testblock-bottom-container">
        <div className="testblock-image-container-avatar">
          <img src={avatar} alt="avatar" />
          <h3>{category}</h3>
        </div>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="testblock-button-container">
          <Button text="Spręsti" fill={true} />
          <Button text="Daugiau" fill={false} />
        </div>
      </div>
    </div>
  );
};

export default TestBlock;
