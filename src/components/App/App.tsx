import { GrLike, GrCheckboxSelected } from "react-icons/gr";
import Alert from "../Alert/Alert";
import "./App.css";
import Popups from "../Popups/Popups";
import { PiSmileyMeh } from "react-icons/pi";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div className="alert">
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
      </div>

      <div className="popups">
        <Popups
          Icon={PiSmileyMeh}
          title="Accept changes?"
          paragraph="Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor."
        />
      </div>
    </div>
  );
}

export default App;
