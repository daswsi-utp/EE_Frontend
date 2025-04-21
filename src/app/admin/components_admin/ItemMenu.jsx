const ItemMenu = ({ Icono, nombre, togle }) => {
  return (
    <div className="text-white flex items-center gap-4 hover:text-hover hover:bg-hover-bg p-2 cursor-pointer rounded-lg transition-all duration-200">
      <div className="min-w-6 flex justify-center">
        <Icono className="text-[23px]" />
      </div>
      {togle && (
        <span className="font-bold text-[16px] transition-all duration-200 text-nowrap">
          {nombre}
        </span>
      )}
    </div>
  );
};

export default ItemMenu;
