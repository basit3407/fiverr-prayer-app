import Svg, { Path } from "react-native-svg";
import { scale } from "../../../../lib/scaling";
import { preserveAspectRatio } from "./Ellipse";

const Volume: React.FC = () => {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio}
      width={scale(24)}
      height={scale(24)}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1396 4.95611C15.2687 5.45963 15.3212 5.96422 15.3716 6.45056L15.4188 6.89288C15.5994 8.36908 15.5994 15.6213 15.4188 17.1082L15.3716 17.5666L15.3707 17.5752C15.3259 18.0352 15.2794 18.5113 15.1469 19.0192C14.7952 20.2206 13.8577 21 12.7932 21C12.7596 21 12.726 21 12.6882 20.9989C12.1003 20.9989 11.461 20.6382 11.0988 20.3236L7.56822 17.383H5.75517C4.35575 17.383 3.33112 16.3706 3.1453 14.8042C2.93114 13.2379 2.97313 10.5506 3.1453 9.12705C3.34792 7.6444 4.42084 6.61697 5.75517 6.61697H7.56822L11.0316 3.71932C11.4494 3.35644 12.1864 2.99786 12.7691 3.00001C13.8136 3.00001 14.7879 3.75153 15.1396 4.95611ZM18.1476 6.25839C18.5665 5.96529 19.1397 6.07051 19.4263 6.49458C20.4404 7.98796 21 9.94298 21 12C21 14.057 20.4404 16.012 19.4263 17.5054C19.2541 17.7577 18.9728 17.9091 18.6715 17.9091C18.4836 17.9091 18.3019 17.8511 18.1476 17.7416C17.7319 17.4453 17.629 16.8591 17.9177 16.434C18.7208 15.2509 19.1628 13.6759 19.1628 12C19.1628 10.323 18.7208 8.74914 17.9177 7.56603C17.629 7.14089 17.7319 6.5547 18.1476 6.25839Z"
        fill="white"
      />
    </Svg>
  );
};

export default Volume;
