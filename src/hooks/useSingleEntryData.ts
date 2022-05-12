import { useEffect, useState } from "react";
import { useContentfulClient } from "../contexts/ContentfulProvider";

const useSingleEntryData = (entryId: string) => {
  const client = useContentfulClient();
  const [data, setData] = useState({});

  useEffect(() => {
    client
      .getEntry(entryId)
      .then((resp: any) => setData(resp?.fields))
      .catch((e: any) => console.log("info fetching error", e));
  }, [client, entryId]);

  return data;
};

export default useSingleEntryData;
