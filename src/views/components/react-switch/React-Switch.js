import React, {useState} from "react";
import Switch from "react-switch";

const ReactSwitch = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <>
      <label>
        <Switch
          checked={checked}
          onChange={handleChange}
          onColor="#55ad2b"
          onHandleColor="#2693e6"
          offHandleColor="#2693e6"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.6)"
          height={10}
          width={35}
          className="react-switch"
          id="material-switch"
        />
      </label>
    </>
  )
}

export default ReactSwitch;
