import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AddImageSvg = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={props.size}
        height={props.size}
        color={props.color}
        fill="none"
        {...props}
    >
        <Path
            d="M11.5085 2.9903C7.02567 2.9903 4.78428 2.9903 3.39164 4.38238C1.99902 5.77447 1.99902 8.015 1.99902 12.4961C1.99902 16.9771 1.99902 19.2176 3.39164 20.6098C4.78428 22.0018 7.02567 22.0018 11.5085 22.0018C15.9912 22.0018 18.2326 22.0018 19.6253 20.6098C21.0179 19.2176 21.0179 16.9771 21.0179 12.4961V11.9958"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M4.99902 20.9898C9.209 16.2385 13.9402 9.93727 20.999 14.6632"
            stroke="currentColor"
            strokeWidth={1.5}
        />
        <Path
            d="M17.9958 1.99829V10.0064M22.0014 5.97728L13.9902 5.99217"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default AddImageSvg;
