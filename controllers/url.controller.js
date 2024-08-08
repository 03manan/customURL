const shortid = require("shortid");
const URL = require("../models/url.model.js");

// async function handleGenerateCustomtURL(req, res) {
//   //NO URL
//   const body = req.body;
//   if (!body.url) return res.status(400).json({ error: "url is required" });
//  //If no key given, then we will generate a random key  
//   let customURL;
//   if (!body.key) customURL = shortid();
//   else customURL = body.key;

//   //if that key already exists
//   const ShortIdExists = await URL.findOne({ customURL });
//   if (ShortIdExists) return res.status(409).json({ message: "This key is already taken." });

//   const newURL = await URL.create({
//     customURL: customURL,
//     redirectURL: body.url,
//   });

//   console.log(newURL.redirectURL);
  
//   return res.json({ id: customURL  });
// }

//updated for error handling
async function handleGenerateCustomtURL(req, res) {
  //NO URL
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  //If no key given, then we will generate a random key  
  let customURL;
  if (!body.key) customURL = shortid();
  else customURL = body.key;

  //if that key already exists
  const ShortIdExists = await URL.findOne({ customURL });
  if (ShortIdExists) return res.status(409).json({ message: "This key is already taken." });

  const newURL = await URL.create({
    customURL: customURL,
    redirectURL: body.url,
  });

  console.log(newURL.redirectURL);
  
  return res.json({ id: customURL  });
}


async function redirectToOriginalURL(req, res) {
  try {
    const customURL = req.params.customURL;
    const entry = await URL.findOne({ customURL });
    console.log("Retrieved customURL from params:", customURL);

    if (entry) {
      // If an entry is found, redirect to the original URL
    res.redirect(entry.redirectURL);
    
    } else {
      // If the entry is not found
    res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error("Error redirecting to original URL:", error);
    res.status(500).send("Internal server error");
  }
}

module.exports = { handleGenerateCustomtURL, redirectToOriginalURL };
