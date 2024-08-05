const navbar = ({ navValue }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">{!navValue ? "Ilham Syawal M" : navValue}</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
