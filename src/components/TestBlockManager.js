import { useEffect, useState } from "react";
import TestBlock from "./TestBlock";

const TestBlockManager = () => {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    fetch("https://testioapi.herokuapp.com/api/tests/")
      .then((response) => response.json())
      .then((data) => {
        setTests(data);
      });
  }, []);

  return (
    <div className="container-test-block">
      {tests.map((test) => {
        return (
          <TestBlock
            key={test.id}
            title={test.name}
            description={test.description}
            category_id={test.fk_category}
          />
        );
      })}
    </div>
  );
};
export default TestBlockManager;
