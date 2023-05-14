async function prevodMeny(mnozstvi, zMeny, doMeny) {
    try {
      const url = `https://api.exchangerate-api.com/v4/latest/${zMeny}`;
      const response = await fetch(url);
      const data = await response.json();
  
      if (doMeny in data.rates) {
        const kurz = data.rates[doMeny];
        const vysledek = mnozstvi * kurz;
        return vysledek;
      } else {
        throw new Error("Neplatná měna");
      }
    } catch (error) {
      throw new Error("Chyba při získávání kurzu");
    }
  }
  
  // Příklad použití funkce pro převod 100 USD na CZK
  const mnozstvi = 100;
  const zMeny = "USD";
  const doMeny = "CZK";
  
  prevodMeny(mnozstvi, zMeny, doMeny)
    .then((vysledek) => {
      console.log(`${mnozstvi} ${zMeny} = ${vysledek} ${doMeny}`);
    })
    .catch((error) => {
      console.error(error);
    });