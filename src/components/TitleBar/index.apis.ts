import { useEffect, useState } from "react";
import { useContentfulClient } from "../../contexts/ContentfulProvider";

export const useMenuData = () => {
  const client = useContentfulClient();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    client
      ?.getEntries({
        content_type: "menubar",
        select: "fields",
        order: "fields.order",
      })
      ?.then((resp: any) =>
        setMenus(resp.items.map((item: { fields: any }) => item?.fields))
      )
      ?.catch((e: any) => console.log("error", e));
  }, [client]);

  return menus;
};
