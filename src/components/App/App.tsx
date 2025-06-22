import { GrLike, GrCheckboxSelected } from "react-icons/gr";
import Alert from "../Alert/Alert";
import "./App.css";

function App() {
  return (
    <>
      <Alert
        title="Changes saved successfully"
        paragraph="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
        Icon={GrLike}
        action="Learn More"
        type="big"
        close="default"
      />
      <Alert
        title="Changes saved successfully"
        paragraph="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
        Icon={GrLike}
        type="big"
        close="default"
      />
      <Alert
        title="Changes saved successfully"
        paragraph="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
        close="default"
        action="Learn More"
      />
      <Alert
        title="Changes saved successfully"
        paragraph="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
        close="default"
      />
      <Alert title="Changes saved successfully" close="default" />
      <Alert title="Changes saved successfully" close="button" />

      <Alert
        title="Changes saved successfully"
        Icon={GrCheckboxSelected}
        type="small"
      />
      <Alert
        title="Changes saved successfully"
        Icon={GrCheckboxSelected}
        type="small"
        close="button"
      />
      <Alert
        title="Changes saved successfully"
        Icon={GrCheckboxSelected}
        type="small"
        close="default"
      />
    </>
  );
}

export default App;
