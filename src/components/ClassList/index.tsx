import { Class } from "../../types/class";
import {
  CategoryContainer,
  ClassItemContainer,
  ClassListContainer,
  ClassTitle,
  NameAndCategory,
} from "./index.styles";

const ClassList = ({
  category,
  classList,
}: {
  category: string;
  classList: Class[];
}) => {
  return (
    <section>
      <CategoryContainer>{category}</CategoryContainer>

      <ClassListContainer>
        {classList.map((classItem) => (
          <ClassItemContainer>
            <img src={classItem.imageURL} alt="class thumbnail" />

            <NameAndCategory>
              {classItem.artistName} - {classItem.classCategory}
            </NameAndCategory>

            <ClassTitle>{classItem.classTitle}</ClassTitle>
          </ClassItemContainer>
        ))}
      </ClassListContainer>
    </section>
  );
};

export default ClassList;
