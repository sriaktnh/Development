import reducer from "../../client/reducers";
import { logTest } from '../views/test1'

export default function initTop() {
  console.log('this is init top from server side');
  const studentsDetails = logTest();
  console.log('studenta', studentsDetails)
  reducer.stdDetails= studentsDetails;
  return {
    reducer,
    initialState: {
      checkBox: { checked: false },
      number: { value: 200 },
      username: { value: "", stdDetails:studentsDetails },
      textarea: { value: "" },
      selectedOption: { value: "0-13" },
      showFakeComp: { value: true },
      showStdDetails:studentsDetails
    }
  };
}
