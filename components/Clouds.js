import React from "react";
import Svg, { Path } from "react-native-svg";

const Clouds = (props) => {
  return (
    <Svg width="100%" height="150" viewBox="0 0 288.312 105.351" preserveAspectRatio="none" {...props}>
      <Path
        opacity={0.6}
        fill="#FFF"
        d="M197.831 63.351h84s-7.875-12-20.125-6.875c0 0-5.625-15-23.75-15-12.125 0-18.75 13.75-18.75 13.75s-17.75-6.125-21.375 8.125zm-176.906 40h53.906s-5.054-7.701-12.915-4.412c0 0-3.61-9.626-15.241-9.626-7.781 0-12.033 8.823-12.033 8.823s-11.391-3.93-13.717 5.215zM6.831 52.601l106.375 1.25s-8.125-25-27.875-25c-12.5-.125-20.125 10.5-20.125 10.5s.875-5.75-5.188-5.375c0 0-1.063-12.125-13.438-12.125S33.456 34.976 33.456 34.976s-14.25-3.25-16.375 12.5c0 0-7.625-2.75-10.25 5.125zm162-30.096l64.53.758s-4.929-15.166-16.91-15.166c-7.582-.076-12.208 6.37-12.208 6.37s.531-3.488-3.146-3.261c0 0-.645-7.355-8.152-7.355s-7.962 7.962-7.962 7.962-8.645-1.972-9.934 7.583c0 0-4.625-1.668-6.218 3.109z"
      />
    </Svg>
  )
}

export default Clouds;
