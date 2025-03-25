import { useRef, type FormEvent } from "react";


type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleAddGoal(event: FormEvent<HTMLFormElement>) {
        // Prevent the app to automatically send http request to server
        event.preventDefault();
    
        const inputGoal = goal.current!.value;
        const inputSummary = summary.current!.value;
    
        // Use currentTarget to target and reset Form after user enter inputs
        event.currentTarget.reset();
        onAddGoal(inputGoal, inputSummary);
    }

    return (
        <form onSubmit={handleAddGoal}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}