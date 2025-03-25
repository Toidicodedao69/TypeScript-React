import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGType} from "../App.tsx";

type CourseGoalListProp = {
    goalList: CGType[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList ({goalList, onDeleteGoal} : CourseGoalListProp) {
    return (
        <ul>
            {goalList.map((goal) => (
            <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                <p>{goal.desc}</p>
                </CourseGoal>
            </li>
            ))}
        </ul>
    )
}