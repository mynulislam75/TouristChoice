import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializeAuhetication=()=>{
    initializeApp(firebaseConfig);
    
}
export default initializeAuhetication;