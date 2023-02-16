const filterName = (findname, findCategory, findcountry, items) => {
    if (!findname) {
      return items;
    } else {
      if (findCategory === "All" && findcountry === "All") {
        return items.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      } else if (findCategory !== "All" && findcountry === "All") {
        let findedcity = items.filter(({ category}) => category.includes(findCategory));
        return findedcity.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      } else if (findCategory === "All" && findcountry !== "All") {
        let findedcountri = items.filter(({ countri }) =>
          countri.includes(findcountry)
        );
        return findedcountri.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      } else if (findCategory !== "All" && findcountry !== "All") {
        let findall = items.filter(({ countri }) =>
          countri.includes(findcountry)
        );
        let findedall = findall.filter(({ city }) => city.includes(findCategory));
        return findedall.filter(({ name }) =>
          name.toLowerCase().includes(findname.toLowerCase())
        );
      }
    }
  };

   export default filterName;