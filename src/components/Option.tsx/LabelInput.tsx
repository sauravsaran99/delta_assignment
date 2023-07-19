import { useEffect, useState } from "react";


interface LabelInputProps {
    getOptions: (val: string, stage: boolean | null) => any,
    company: string,
    status: boolean
}

const LabelInput: React.FC<LabelInputProps> = ({ getOptions, company, status }) => {
    const [stateCheckbox, setState] = useState(false);

    function allLabelFunction(val: boolean) {
        getOptions(company, stateCheckbox)
        setState(val)
    }

    useEffect(() => {
        setState(status)
    }, [status]);

    console.log('stateCheckbox', stateCheckbox)

    return (
        <label onClick={() => allLabelFunction(stateCheckbox ? false : true)}>
            <input type="checkbox" value={company} checked={stateCheckbox} />
            {company}
        </label>
    )
}

export default LabelInput;