import { useEffect, useState } from "react";
import { useContentfulClient } from "../contexts/ContentfulProvider";

const useGetData = (
  contentType: string,
  orderBy: string = "",
  reverseOrder: boolean = false
) => {
  const client = useContentfulClient();
  const [data, setData] = useState([]);

  useEffect(() => {
    const options =
      orderBy !== ""
        ? {
            content_type: contentType,
            select: "fields",
            order: `${reverseOrder ? "-" : ""}fields.${orderBy}`,
          }
        : {
            content_type: contentType,
            select: "fields",
          };
    client
      .getEntries(options)
      .then((resp: any) =>
        setData(resp.items.map((item: { fields: any }) => item?.fields))
      )
      .catch((e: any) => console.log("info fetching error", e));
  }, [client, contentType, orderBy]);

  return data;
};

export default useGetData;
