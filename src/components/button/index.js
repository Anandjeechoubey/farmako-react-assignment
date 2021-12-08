import React from "react";

import Lottie from "react-lottie";
import * as animationData from "../../assets/animations/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
};

const Button = ({ tittle, action, disabled = false, loading = false }) => {
  return (
    <button
      onClick={action}
      className={`button-primary ${disabled && "disabled"}`}
    >
      {loading ? (
        // <Lottie
        //   options={defaultOptions}
        //   height={40}
        //   width={80}
        //   isStopped={false}
        //   isPaused={false}
        // />
        "Loading..."
      ) : (
        tittle
      )}
    </button>
  );
};

export default Button;
