export const fetchLists = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/list-creation/lists");
      if (!response.ok) throw new Error("HTTP Error:" +response.status);
  
      const data = await response.json();
      console.log("API Data:", data); // Debugging line
  
      return Array.isArray(data) ? data : data.lists || []; // Ensure an array
    } catch (error) {
      console.error("Error fetching lists:", error);
      throw error;
    }
  };