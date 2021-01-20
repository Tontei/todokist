const Header = (props) => {
  return (
    <div className="w-8/10 bg-third  my-2 py-5 px-auto text-center rounded-2xl shadow-lg">
      <p className="text-4xl font-semibold text-first font-sans">{props.text}</p>
    </div>
  );
};

export default Header;
