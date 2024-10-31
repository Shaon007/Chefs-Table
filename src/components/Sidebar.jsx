const Sidebar = ({recipeQueue}) => {
  return (
    <div className="md:w-1/3">
      Want To Cook : {recipeQueue.length}
    </div>
  );
};

export default Sidebar;