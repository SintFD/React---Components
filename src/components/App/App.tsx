import { GrLike, GrCheckboxSelected } from "react-icons/gr";
import Alert from "../Alert/Alert";
import "./App.css";
import Popups from "../Popup/Popup";
import { PiSmileyMeh } from "react-icons/pi";
import Button from "../common/Button/Button";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import photo from "../../img/Rectangle 1.png";

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
          buttons={
            <>
              <Button color="white" text="Reject" />
              <Button color="black" text="Accept" />
            </>
          }
        />
        <Popups
          title="We need to verify your identity"
          paragraph="We take certain actions for the safety of our users."
          input={true}
          buttons={<Button color="black" text="Continue" />}
        />

        <Popups
          title="Terms and agreements"
          paragraph="Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam sit ultrices enim cursus. 
            Leo sapien, pretium duis est eu volutpat interdum eu non. 
            Odio eget nullam elit laoreet. Libero at felis nam at orci venenatis rutrum nunc. Etiam mattis ornare pellentesque iaculis enim.
            Felis eu non in aliquam egestas placerat. Eget maecenas ornare venenatis lacus nunc, sit arcu. 
            Nam pharetra faucibus eget facilisis pulvinar eu sapien turpis at. Nec aliquam aliquam blandit eu ipsum."
          buttons={
            <>
              <Button color="white" text="Nope 🤪" />
              <Button color="black" text="I agree" />
            </>
          }
        />
      </div>
      <div className="Modals">
        <Modal
          Icon={PiSmileyMeh}
          title="Are you sure you want to deactivate?"
          paragraph="Deactivating is permanent and your account will automatically be deleted after 30 days if you do not log in again."
          buttons={
            <>
              <Button size="big" color="white" text="Reject" />
              <Button size="big" color="black" text="Accept" />
            </>
          }
        />
        <Modal
          Icon={PiSmileyMeh}
          title="Are you sure you want to deactivate?"
          buttons={
            <>
              <Button size="big" color="black" text="Thanks!" />
            </>
          }
        />

        <Modal
          Icon={PiSmileyMeh}
          title="Are you sure you want to deactivate?"
          buttons={
            <>
              <Button size="small" color="white" text="Undo" />
              <Button size="small" color="black" text="Thanks!" />
            </>
          }
        />
      </div>
      <div className="forms">
        <Form
          title="Subscribe to our Newsletter"
          paragraph="Join thousands getting emails in their inbox."
          input={true}
          buttons={<Button color="black" text="Continue" />}
        />

        <Form
          title="Subscribe to our Newsletter"
          paragraph="Join thousands getting emails in their inbox."
          input={true}
          buttons={<Button color="black" text="Continue" />}
          Photo={<img src={photo} alt="Пример" />}
        />
      </div>
    </div>
  );
}

export default App;
