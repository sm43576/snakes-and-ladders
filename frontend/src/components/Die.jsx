import { Component } from "react";
import "../css//Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Die extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { face, rolling } = this.props;

    // Using font awesome icon to show
    // the exactnumber of dots
    return (
      <div>
        <FontAwesomeIcon
          icon={["fas", `fa-dice-${face}`]}
          className={`Die
				${rolling && "Die-shaking"}`}
        />
      </div>
    );
  }
}

export default Die;
