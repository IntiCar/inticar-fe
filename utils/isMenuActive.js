export const isParentActive = (children, path) => {
  console.log(children, path);
  if (!children && !path) {
    return false;
  }

  if (children === path) {
    return true;
  }

  if (!children?.some((item) => item?.subMenu)) {
    return children === path;
  }

  return children?.some((item) =>
    item.path === path
      ? true
      : item?.subMenu?.some((item2) => item2.path === path)
  );
};
