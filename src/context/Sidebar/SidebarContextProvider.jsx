import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
   const [sidebar, setSidebar] = useState(false);

   return (
      <SidebarContext.Provider value={{ sidebar, setSidebar }}>
         {children}
      </SidebarContext.Provider>
   );
};

SidebarProvider.propTypes = {
   children: PropTypes.node,
};

export default SidebarProvider;
