const BASE_URL = 'https://api.airtable.com/v0';
const AIRTABLE_API_KEY = 'patI4kk7dafbqUIZ4.a95b22f12008b4aa88b669db515a62b0196f0704941a8e83fbd02df8d4890104';
const AIRTABLE_BASE_ID = 'appV8FQZlVGvu7g4T';
const AIRTABLE_TABLE_NAME= 'Portfolio';
const API_URL = `${BASE_URL}/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`
  
async function GetPortfolio() {
    const response = await fetch(`${API_URL}?view=Grid%20view`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });
    const data = await response.json();
    console.log(data)
    return data;
  }

async function PostPortfolio(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
    },
    body: JSON.stringify(data),
  });
  const newData = await response.json();
  console.log(newData)
  return newData;
}


const DeletePortfolio = async (AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, recordId) => {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${recordId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (response.status === 404) {
      console.error(`Record with ID ${recordId} not found.`);
    } else if (!response.ok) {
      console.error(`Error deleting record with ID ${recordId}`);
    } else {
      console.log(`Record with ID ${recordId} deleted successfully.`);
    }
  } catch (error) {
    console.error("Error deleting record:", error);
  }
};


export { GetPortfolio, PostPortfolio, DeletePortfolio,   AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME  };