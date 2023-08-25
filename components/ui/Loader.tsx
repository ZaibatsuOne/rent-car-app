const Loader = () => {
  return (
    <div className="mx-auto my-auto h-10 w-10 animate-spin">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#4d61ff"
        stroke="#4d61ff"
        stroke-width="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path fill="none" d="M0 0h24v24H0z"></path>{" "}
            <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};

export default Loader;
