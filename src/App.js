import React ,{useState} from "react";
import styles from "./styles.module.scss";
import Logo from "./Icons/Logo.svg"
import Download from "./Icons/download.svg"
import Chat from "./components/ChatIcon/Chat";
import Copay from "./components/Copay";
import Instructions from "./components/Instructions";
import Signature from "./components/Signature";
import Steps from "./components/Steps";
import ConfirmationPopup from "./components/ConfirmationPopup";
import SignHere from "./components/SignHere";
import ResheduleDeliveryForm from "./components/ResheduleDeliveryForm";

function App() {
    const [visibilityState, setVisibiityState] = useState({
        showResheduleDeliveryForm : false
    })


  const showSignature = false;
  const showLeaveAtStop = true;
  const showConfirmationPopup = false;


  return (
      <div className={styles.AppContainer}>
          <div className={styles.Container}>
              {
                  showConfirmationPopup  &&
                  <div className={styles.ConfirmationPopup}>
                      <ConfirmationPopup/>
                  </div>
              }

              <div className={styles.Header}>
                  <img src={Logo} alt="logo"/>
                  <img src={Download} alt="download"/>
                  <div className={styles.IdContainer}>
                      <div className={styles.Button} onClick={null}>Package out</div>
                      <span className={styles.Id}>#11058553</span>
                  </div>
              </div>
              <div className={styles.Steps}>
                  <Steps/>
              </div>
              <div className={styles.Message}>
                  {
                      showSignature ? "Your signature" : "Confirm delivery to your order"
                  }

              </div>
              {
                  visibilityState.showResheduleDeliveryForm &&
                  <div className={styles.ResheduleDeliveryForm}>
                      <ResheduleDeliveryForm/>
                  </div>
              }
              {
                  !showSignature &&   <div className={styles.DeliveryDetails}>
                      <div className={styles.Detail}>
                          <span className={styles.Title}>Date to deliver:</span>
                          <span>04/10/2020</span>
                      </div>
                      <div className={styles.Detail}>
                          <span className={styles.Title}>Promissed ETA:</span>
                          <span>11:00 AM - 04:00 PM</span>
                      </div>
                      <div className={styles.Detail}>
                          <span className={styles.Title}>Delivery Adress</span>
                          <span><a>2333 East 2nd Street Brooklyn, APT 5A NY 11223</a></span>
                      </div>
                      <div className={styles.Detail}>
                          <span className={styles.Title}>From</span>
                          <span>NYU Langone Hospital-Cobble Hill</span>
                      </div>
                  </div>
              }

              {
                  showSignature || showLeaveAtStop && <div className={styles.Signature}><Signature type="leaveAtStop"/></div>
              }
              {
                  ! showSignature &&
                       <>
                            <span className={styles.InsText}>Instruction</span>
                            <div className={styles.InstructionsContainer}><Instructions/></div>
                           <div className={styles.CopayContainer}><Copay amount={138}/></div>
                       </>
              }
              {
                  showSignature && <div className={styles.SignHere}><SignHere/></div>

              }
              <div className={styles.Footer}>
                  <div className={styles.ResheduleButton} onClick={null}>Reshedule delivery</div>
                  <div className={styles.ConfirmButton} onClick={null}>Confirm</div>
              </div>
          </div>
          <div className={styles.ChatWrapper}><Chat count={1}/></div>
      </div>

  );
}

export default App;
