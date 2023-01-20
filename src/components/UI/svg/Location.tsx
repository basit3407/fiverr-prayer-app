import Svg, { G, Path } from "react-native-svg";
import { scale } from "../../../../lib/scaling";
import { preserveAspectRatio } from "./Ellipse";

const Location: React.FC = () => {
  return (
    <Svg
      width={scale(16)}
      height={scale(16)}
      preserveAspectRatio={preserveAspectRatio}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G opacity="0.9">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5994 6.09733L14.0795 6.57733C14.4597 6.95066 14.6664 7.45733 14.6664 7.99066C14.6731 8.52399 14.4664 9.03133 14.0929 9.41066C14.0884 9.41554 14.084 9.41984 14.0796 9.42413C14.0773 9.42628 14.0751 9.42843 14.0729 9.43066L13.5994 9.90399C13.4126 10.0907 13.3059 10.344 13.3059 10.6113V11.2973C13.3059 12.404 12.4056 13.3047 11.2985 13.3047H10.6116C10.3449 13.3047 10.0914 13.4107 9.9047 13.5973L9.42453 14.0773C9.03105 14.4713 8.51753 14.664 8.00401 14.664C7.49049 14.664 6.97697 14.4713 6.5835 14.0847L6.09666 13.5973C5.90992 13.4107 5.6565 13.3047 5.38973 13.3047H4.70282C3.59575 13.3047 2.69542 12.404 2.69542 11.2973V10.6113C2.69542 10.344 2.58872 10.0907 2.40198 9.89733L1.92181 9.42399C1.14153 8.64466 1.13486 7.37066 1.91514 6.58466L2.40198 6.09733C2.58872 5.91066 2.69542 5.65733 2.69542 5.38399V4.70399C2.69542 3.59733 3.59575 2.69799 4.70282 2.69799H5.38973C5.6565 2.69799 5.90992 2.59066 6.09666 2.40399L6.57683 1.92399C7.35711 1.13799 8.63091 1.13799 9.41786 1.91799L9.9047 2.40399C10.0914 2.59066 10.3449 2.69799 10.6116 2.69799H11.2985C12.4056 2.69799 13.3059 3.59733 13.3059 4.70399V5.39133C13.3059 5.65733 13.4126 5.91066 13.5994 6.09733ZM7.62593 8.62208L9.20142 6.7485H9.19725C9.26468 6.66899 9.36448 6.61683 9.47469 6.60348C9.5849 6.59012 9.6965 6.61668 9.78493 6.6773C9.87336 6.73793 9.93139 6.82765 9.94624 6.92673C9.96109 7.02582 9.93155 7.12615 9.86412 7.20565L7.95936 9.45395C7.92054 9.4993 7.87067 9.53605 7.81359 9.56138C7.75652 9.58671 7.69375 9.59995 7.63009 9.60009C7.56679 9.6004 7.50423 9.58774 7.44718 9.56306C7.39013 9.53839 7.34008 9.50236 7.30083 9.4577L6.28801 8.29233C6.22003 8.21382 6.18952 8.11425 6.2032 8.01551C6.21688 7.91678 6.27362 7.82697 6.36095 7.76585C6.44828 7.70473 6.55903 7.67731 6.66886 7.68961C6.77868 7.7019 6.87857 7.75292 6.94655 7.83143L7.62593 8.62208Z"
          fill="white"
        />
      </G>
    </Svg>
  );
};

export default Location;
