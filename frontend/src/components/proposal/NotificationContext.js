import { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
    const [refreshKey, setRefreshKey] = useState(0);

    const refreshNotifications = useCallback(() => {
        setRefreshKey((prev) => prev + 1);
    }, []);

    return <NotificationContext.Provider value={{ refreshKey, refreshNotifications }}>{children}</NotificationContext.Provider>;
}

export function useNotificationRefresh() {
    return useContext(NotificationContext);
}
