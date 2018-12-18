import newEvListen from "./newEvListeners"
import addSearchEventListener from "../../main";
function newEventsList() {
   newEvListen.showCreateEventForm()
   newEvListen.showCreatedEventsList()
   newEvListen.goBack()
}
export default newEventsList