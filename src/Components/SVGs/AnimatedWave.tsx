const AnimatedWave = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 150 1440 390"
    xmlns="http://www.w3.org/2000/svg"
    // style={{ backgroundColor: "red" }}
    className="transition duration-300 ease-in-out delay-150"
    //  style={{ maxHeight: "200px", width: "100%", aspectRatio: undefined }}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .path-0 {
            animation: pathAnim-0 4s linear infinite;
          }
          @keyframes pathAnim-0 {
            0% {
              d: path("M 0,400 L 0,150 C 129.85714285714283,153.39285714285714 259.71428571428567,156.78571428571428 388,152 C 516.2857142857143,147.21428571428572 643,134.25 762,115 C 881,95.75 992.2857142857142,70.21428571428571 1104,75 C 1215.7142857142858,79.78571428571429 1327.857142857143,114.89285714285714 1440,150 L 1440,400 L 0,400 Z");
            }
            25% {
              d: path("M 0,400 L 0,150 C 110.92857142857142,176.25 221.85714285714283,202.5 334,184 C 446.14285714285717,165.5 559.5,102.24999999999999 700,83 C 840.5,63.750000000000014 1008.1428571428571,88.5 1136,107 C 1263.857142857143,125.5 1351.9285714285716,137.75 1440,150 L 1440,400 L 0,400 Z");
            }
            50% {
              d: path("M 0,400 L 0,150 C 133,166.03571428571428 266,182.07142857142858 390,171 C 514,159.92857142857142 629,121.75 731,109 C 833,96.25 922,108.92857142857144 1038,120 C 1154,131.07142857142856 1297,140.53571428571428 1440,150 L 1440,400 L 0,400 Z");
            }
            75% {
              d: path("M 0,400 L 0,150 C 160.5,181.64285714285714 321,213.28571428571428 417,219 C 513,224.71428571428572 544.5,204.49999999999997 661,187 C 777.5,169.50000000000003 979,154.71428571428572 1123,149 C 1267,143.28571428571428 1353.5,146.64285714285714 1440,150 L 1440,400 L 0,400 Z");
            }
            100% {
              d: path("M 0,400 L 0,150 C 129.85714285714283,153.39285714285714 259.71428571428567,156.78571428571428 388,152 C 516.2857142857143,147.21428571428572 643,134.25 762,115 C 881,95.75 992.2857142857142,70.21428571428571 1104,75 C 1215.7142857142858,79.78571428571429 1327.857142857143,114.89285714285714 1440,150 L 1440,400 L 0,400 Z");
            }
          }
        `,
      }}
    />
    <path
      d="M 0,400 L 0,150 C 129.85714285714283,153.39285714285714 259.71428571428567,156.78571428571428 388,152 C 516.2857142857143,147.21428571428572 643,134.25 762,115 C 881,95.75 992.2857142857142,70.21428571428571 1104,75 C 1215.7142857142858,79.78571428571429 1327.857142857143,114.89285714285714 1440,150 L 1440,400 L 0,400 Z"
      stroke="none"
      strokeWidth="0"
      fill="#D5F5E3"
      fillOpacity="1"
      className="transition-all duration-300 ease-in-out delay-150 path-0"
      transform="rotate(-180 720 200)"
    />
  </svg>
);

export default AnimatedWave;
