import { Clothing } from "~/../models/product";

export default function handler(req, res) {
  
    if (req.method === "POST") {
      const clothing = new Clothing(req.body);
      clothing.save()
        .then(() => {
          res.status(200).json({ success: true });
        })
        .catch((error) => {
          console.error("Error saving clothing:", error);
          res.status(500).json({ success: false, error: "An error occurred while saving the clothing" });
        });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }