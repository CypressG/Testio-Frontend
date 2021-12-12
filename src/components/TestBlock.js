import photo from "../images/test_background.jpg";
import avatar from "../images/avatar.png";
import questionmark from "../images/question.svg";
import time from "../images/time.svg";
import flag from "../images/flag.svg";

const TestBlock = (props) => {
  return (
    <div className="testblock-container">
      <div className="testblock-label-container">
        <div className="testblock-label-questionmark-container">
          <img src={questionmark} alt="questionmark" />
          <h5>{props.questions}</h5>
        </div>
        <div className="testblock-label-time-container">
          <img src={time} alt="questionmark" />
          <h5>{props.time}</h5>
        </div>
        <div className="testblock-label-flag-container">
          <img src={flag} alt="questionmark" />
          <h5>{props.progress}</h5>
        </div>
      </div>

      <div className="testblock-image-container">
        <img src={photo} alt="hills" />
      </div>
      <div className="testblock-bottom-container">
        <div className="testblock-image-container-avatar">
          <img src={avatar} alt="avatar" />
          <h3>{props.username}</h3>
        </div>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="testblock-button-container">
          <button className="main-button">Spręsti</button>
          <button className="extra-button">Daugiau</button>
        </div>
      </div>
    </div>
  );
};

export default TestBlock;
