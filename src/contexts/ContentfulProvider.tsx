import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { createClient } from "contentful";

const ContentfulClientContext = createContext<any>(null);
const contentfulClient = createClient({
  space: process.env.REACT_APP_SPACE_ID ?? "",
  accessToken: process.env.REACT_APP_ACCESS_TOKEN ?? "",
});

export const ContentfulClientProvider: FC<any> = ({ children }) => {
  const [client, setClient] = useState<any>(contentfulClient);

  return (
    <ContentfulClientContext.Provider value={client}>
      {children}
    </ContentfulClientContext.Provider>
  );
};

export const useContentfulClient = () => {
  const client = useContext(ContentfulClientContext);

  return client;
};
