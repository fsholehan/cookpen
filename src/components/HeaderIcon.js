function HeaderIcon({ title, Icon, active }) {
  return (
    <div className="flex items-center space-x-2 cursor-pointer flex-col md:flex-row">
      <Icon
        className={`h-6 w-6  text-gray-600 ${active && "text-yellow-400"}`}
      />
      <p className={`${active && "text-yellow-400"} text-gray-600`}>{title}</p>
    </div>
  );
}

export default HeaderIcon;
