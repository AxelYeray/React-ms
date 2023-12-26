import React from "react";

function StepsRecipe(props) {
    const stepsRecipe = props.steps.map((step, index) => {
        return (
            <li key={index}>
                {step.name}
            </li>
        );
    });

    return (
        <ol>
            {stepsRecipe}
        </ol>
    );
}

export default StepsRecipe;