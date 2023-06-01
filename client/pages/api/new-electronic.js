import { Grocery } from "../../../models/product";

export default async function handler(req, res) {
    console.log("helloz")
  try {
    if (req.method === "POST") {
      const grocery = new Grocery(req.body);
      await grocery.save();
      res.status(200).json({ success: true });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error("Error saving grocery:", error);
    res.status(500).json({ success: false, error: "An error occurred while saving the grocery" });
  }
}