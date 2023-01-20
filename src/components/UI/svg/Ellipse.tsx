import Svg, { Path, Circle, Rect } from "react-native-svg";
import { scale } from "../../../../lib/scaling";

export const preserveAspectRatio = "xMinYMin slice";

const Ellipse: React.FC = () => {
  return (
    <Svg
      width={scale(375)}
      height={scale(152)}
      viewBox="0 0 375 152"
      fill="none"
      preserveAspectRatio={preserveAspectRatio}
    >
      <Path
        opacity="0.3"
        d="M188.5 7C207.495 7 226.451 11.5177 244 18.3524V144H188.646H42.5C42.5 126.14 47.7414 108.455 55.0105 91.955C62.2797 75.4548 72.9343 60.4622 86.3659 47.8335C99.7975 35.2047 115.451 24.8346 133 18C150.549 11.1654 169.505 7 188.5 7Z"
        fill="#FFEC86"
      />

      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M334.078 134.404L332.09 134.65C331.857 132.772 331.588 130.901 331.283 129.039L333.259 128.715C333.568 130.604 333.841 132.5 334.078 134.404ZM332.408 124.003L330.443 124.39C330.077 122.535 329.675 120.688 329.237 118.851L331.185 118.388C331.629 120.25 332.037 122.122 332.408 124.003ZM330 113.748L328.068 114.275C327.57 112.451 327.037 110.638 326.469 108.836L328.379 108.235C328.955 110.061 329.495 111.899 330 113.748ZM326.865 103.692L324.976 104.354C324.349 102.571 323.688 100.8 322.993 99.0433L324.855 98.3078C325.56 100.089 326.23 101.884 326.865 103.692ZM323.021 93.8837L321.183 94.6792C320.431 92.9457 319.646 91.2267 318.826 89.5232L320.632 88.6568C321.462 90.3837 322.259 92.1264 323.021 93.8837ZM318.486 84.3747L316.71 85.2991C315.837 83.6242 314.93 81.9655 313.991 80.3241L315.73 79.3313C316.682 80.9952 317.601 82.6767 318.486 84.3747ZM313.284 75.2131L311.579 76.2618C310.588 74.6538 309.565 73.0639 308.511 71.493L310.174 70.3788C311.243 71.9712 312.28 73.583 313.284 75.2131ZM307.441 66.4456L305.815 67.6132C304.712 66.0804 303.578 64.5674 302.414 63.0751L303.994 61.8451C305.174 63.3579 306.323 64.8918 307.441 66.4456ZM300.986 58.1171L299.448 59.3977C298.239 57.948 297 56.5197 295.732 55.1137L297.219 53.7742C298.505 55.1996 299.761 56.6475 300.986 58.1171ZM293.953 50.2698L292.51 51.6568C291.855 50.9763 291.192 50.3016 290.523 49.6327C289.853 48.9638 289.178 48.3021 288.497 47.6476L289.885 46.2056C290.575 46.869 291.26 47.5398 291.939 48.2179C292.618 48.896 293.289 49.58 293.953 50.2698ZM286.377 42.9427L285.036 44.4289C283.629 43.1617 282.199 41.9241 280.748 40.7165L282.03 39.1793C283.501 40.4035 284.95 41.6581 286.377 42.9427ZM278.298 36.1749L277.067 37.7529C275.574 36.5897 274.059 35.4572 272.525 34.3556L273.693 32.7309C275.249 33.8476 276.784 34.9957 278.298 36.1749ZM269.756 30.0001L268.641 31.6619C267.069 30.6086 265.477 29.587 263.868 28.5974L264.917 26.8935C266.549 27.8967 268.162 28.9324 269.756 30.0001ZM260.795 24.4502L259.801 26.1872C258.158 25.2491 256.498 24.3435 254.822 23.4708L255.747 21.6965C257.447 22.5811 259.13 23.4992 260.795 24.4502ZM251.461 19.5531L250.593 21.3566C248.888 20.5382 247.168 19.7532 245.432 19.002L246.229 17.1662C247.988 17.9277 249.732 18.7235 251.461 19.5531ZM241.8 15.3337L241.064 17.1943C239.305 16.4997 237.533 15.8393 235.748 15.2134L236.411 13.3255C238.221 13.96 240.017 14.6295 241.8 15.3337ZM231.863 11.8132L231.262 13.7215C229.459 13.1542 227.644 12.6217 225.818 12.1244L226.345 10.1941C228.195 10.6982 230.035 11.2381 231.863 11.8132ZM221.7 9.00978L221.237 10.9561C219.398 10.5189 217.55 10.1171 215.692 9.75109L216.08 7.78816C217.963 8.15918 219.837 8.56653 221.7 9.00978ZM211.363 6.93796L211.04 8.91243C209.175 8.60747 207.302 8.33843 205.423 8.10572L205.669 6.12016C207.575 6.35607 209.473 6.62881 211.363 6.93796ZM200.904 5.60848L200.722 7.60098C198.842 7.42982 196.955 7.29495 195.063 7.19678L195.166 5.19872C197.085 5.29824 198.997 5.43497 200.904 5.60848ZM190.377 5.02795L190.338 7.02833C189.393 7.00996 188.447 7.00075 187.5 7.00075C186.553 7.00075 185.607 7.00996 184.662 7.02832L184.623 5.02795C185.581 5.00933 186.54 5 187.5 5C188.46 5 189.419 5.00934 190.377 5.02795ZM179.834 5.19872L179.937 7.19677C178.045 7.29495 176.158 7.42982 174.278 7.60098L174.096 5.60848C176.003 5.43496 177.915 5.29824 179.834 5.19872ZM169.331 6.12016L169.577 8.10572C167.698 8.33843 165.825 8.60747 163.96 8.91242L163.637 6.93796C165.527 6.62881 167.425 6.35607 169.331 6.12016ZM158.92 7.78816L159.308 9.75109C157.45 10.1171 155.602 10.5189 153.763 10.9561L153.3 9.00978C155.163 8.56652 157.037 8.15918 158.92 7.78816ZM148.655 10.1941L149.182 12.1244C147.356 12.6217 145.541 13.1542 143.738 13.7215L143.137 11.8132C144.965 11.2381 146.805 10.6982 148.655 10.1941ZM138.589 13.3255L139.252 15.2134C137.467 15.8392 135.695 16.4997 133.936 17.1943L133.2 15.3337C134.983 14.6295 136.779 13.96 138.589 13.3255ZM128.771 17.1662L129.568 19.002C127.832 19.7532 126.112 20.5382 124.407 21.3566L123.539 19.5531C125.268 18.7235 127.012 17.9277 128.771 17.1662ZM119.253 21.6965L120.178 23.4708C118.502 24.3435 116.841 25.2491 115.199 26.1872L114.205 24.4502C115.87 23.4992 117.553 22.5811 119.253 21.6965ZM110.083 26.8934L111.132 28.5974C109.523 29.587 107.931 30.6086 106.359 31.6619L105.244 30.0001C106.838 28.9324 108.451 27.8967 110.083 26.8934ZM101.307 32.7309L102.475 34.3556C100.941 35.4572 99.4265 36.5897 97.9327 37.7529L96.7015 36.1749C98.2158 34.9957 99.7512 33.8476 101.307 32.7309ZM92.9699 39.1793L94.2517 40.7165C92.8007 41.9241 91.3709 43.1617 89.9635 44.4289L88.6228 42.9427C90.0495 41.6581 91.4989 40.4035 92.9699 39.1793ZM85.115 46.2055L86.5033 47.6475C85.8222 48.302 85.1468 48.9638 84.4772 49.6327C83.8077 50.3016 83.1453 50.9763 82.4902 51.6568L81.0468 50.2698C81.7109 49.58 82.3824 48.896 83.0611 48.2179C83.7398 47.5398 84.4245 46.869 85.115 46.2055ZM77.7807 53.7742L79.2684 55.1136C78 56.5197 76.7612 57.948 75.5524 59.3977L74.0136 58.1171C75.239 56.6475 76.4949 55.1995 77.7807 53.7742ZM71.0064 61.8451L72.5859 63.0751C71.4216 64.5674 70.2879 66.0804 69.1853 67.6132L67.559 66.4456C68.6768 64.8918 69.826 63.3579 71.0064 61.8451ZM64.8256 70.3788L66.4889 71.493C65.4347 73.0639 64.412 74.6538 63.4214 76.2617L61.7159 75.2131C62.7201 73.583 63.7568 71.9712 64.8256 70.3788ZM59.2702 79.3313L61.009 80.3241C60.0699 81.9654 59.1634 83.6241 58.2899 85.2991L56.5138 84.3747C57.3993 82.6767 58.3183 80.9952 59.2702 79.3313ZM54.3684 88.6568L56.1736 89.5232C55.3544 91.2267 54.5686 92.9457 53.8167 94.6792L51.9791 93.8837C52.7414 92.1264 53.538 90.3837 54.3684 88.6568ZM50.1448 98.3077L52.0073 99.0433C51.312 100.8 50.6509 102.571 50.0244 104.354L48.1347 103.692C48.7698 101.884 49.44 100.089 50.1448 98.3077ZM46.6209 108.235L48.5311 108.836C47.9632 110.637 47.4302 112.451 46.9325 114.275L45.0003 113.748C45.5049 111.899 46.0452 110.061 46.6209 108.235ZM43.8148 118.388L45.763 118.851C45.3254 120.688 44.9231 122.535 44.5568 124.39L42.592 124.003C42.9633 122.122 43.3711 120.25 43.8148 118.388ZM41.7409 128.715L43.7173 129.039C43.4121 130.901 43.1428 132.772 42.9098 134.65L40.9223 134.404C41.1585 132.5 41.4315 130.604 41.7409 128.715ZM40.4102 139.164L42.4046 139.346C42.2333 141.225 42.0983 143.11 42 145L40 144.896C40.0996 142.98 40.2365 141.069 40.4102 139.164ZM334.59 139.164L332.595 139.346C332.767 141.225 332.902 143.11 333 145L335 144.896C334.9 142.98 334.763 141.069 334.59 139.164Z"
        fill="white"
      />
      <Rect y="143" width="375" height="2" fill="white" />
      <Circle
        cx="20"
        cy="144"
        r="5"
        fill="#36AD90"
        stroke="white"
        strokeWidth="2"
      />
      <Circle
        cx="335"
        cy="144"
        r="5"
        fill="#36AD90"
        stroke="white"
        strokeWidth="2"
      />
      <Circle
        cx="261"
        cy="144"
        r="7"
        fill="white"
        stroke="white"
        strokeWidth="2"
      />
      <Circle
        cx="41"
        cy="144"
        r="5"
        fill="#36AD90"
        stroke="white"
        strokeWidth="2"
      />
      <Circle
        cx="355"
        cy="144"
        r="5"
        fill="#36AD90"
        stroke="white"
        strokeWidth="2"
      />
      <Circle
        cx="187"
        cy="144"
        r="5"
        fill="#36AD90"
        stroke="white"
        strokeWidth="2"
      />
      <Path
        d="M244 0L247.412 4.15825L252.365 2.06179L253.453 7.32923L258.814 7.77483L257.33 12.9448L261.869 15.8303L258.152 19.7184L260.83 24.3829L255.732 26.0983L255.936 31.4732L250.625 30.6231L248.308 35.477L244 32.256L239.692 35.477L237.375 30.6231L232.064 31.4732L232.268 26.0983L227.17 24.3829L229.848 19.7184L226.131 15.8303L230.67 12.9448L229.186 7.77483L234.547 7.32923L235.635 2.06179L240.588 4.15825L244 0Z"
        fill="#FFF741"
      />
      <Circle cx="244" cy="18" r="5" fill="#35AB8F" />
    </Svg>
  );
};

export default Ellipse;