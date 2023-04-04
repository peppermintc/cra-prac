import ClassList from "../components/ClassList";
import { CLASS_LIST } from "../constants";

const ClassPage = () => {
  return (
    <div>
      <ClassList category="FILM&PHOTO > Acting" classList={CLASS_LIST} />
    </div>
  );
};

export default ClassPage;
