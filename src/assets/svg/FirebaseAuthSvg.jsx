const FirebaseAuthSvg = (props) => {
  const { width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 351"
    >
      <defs>
        <path
          id="path-1"
          d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"
        />
        <filter
          id="filter-2"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="17.5"
          />
          <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <path
          id="path-3"
          d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556z"
        />
        <filter
          id="filter-4"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="3.5"
          />
          <feOffset
            dx="1"
            dy="-9"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
        </filter>
      </defs>
      <path
        fill="#FFC24A"
        d="M0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998z"
      />
      <use fill="#FFA712" fillRule="evenodd" xlinkHref="#path-1" />
      <use filter="url(#filter-2)" xlinkHref="#path-1" />
      <path
        fill="#F4BD62"
        d="M135.005 150.38l32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233z"
      />
      <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#path-3" />
      <use filter="url(#filter-4)" xlinkHref="#path-3" />
      <path
        fill="#F6820C"
        d="M0 282.99762L0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584z"
      />
      <path
        fill="#FDE068"
        d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0023.513.005"
      />
      <path
        fill="#FCCA3F"
        d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0023.334.006l115.392-64.355z"
      />
      <path
        fill="#EEAB37"
        d="M139.12 345.64a24.126 24.126 0 01-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0023.513.005l116.275-64.847-.285-1.752-115.99 64.689z"
      />
    </svg>
  );
};

export default FirebaseAuthSvg;