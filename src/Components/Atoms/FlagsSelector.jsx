import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function FlagsSelector({ className = '', defaultValue = '' }) {
    const [selected, setSelected] = useState(defaultValue || "US");

    return (
        <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            searchable
            className={`${className} !pb-0`}
            selectButtonClassName="!border-0"
        />
    );
}

export default FlagsSelector;