import { useEffect, useState } from "react";
import data from "../data/data.js";

const Main = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState("DCI");

  const handleChangeSearchType = (e) => {
    setSearchType(e.target.value);
  };

  useEffect(() => {
    const list = data.list1;
    const result = list.filter((el) =>
      el[searchType].toLowerCase().includes(query.toLowerCase()),
    );
    setResult(result);
  }, [query, searchType]);

  return (
    <main className="space-y-4 bg-[#f8fef3] px-4 py-3 pb-8">
      <div className="rounded-md bg-yellow-400 p-3 text-gray-700 shadow md:max-w-md">
        <p className="font-bold">Notes importantes:</p>
        <ul className="list-inside list-disc">
          <li>
            Veuillez vérifier attentivement le nom du médicament. Parfois, une
            faute de frappe peut entraîner une légère modification du nom. Par
            exemple : acide fucidique &#8594; acide fusidique
          </li>
          <li>
            Veuillez me contacter si une mise à jour de la liste des médicaments
            a été annoncée.
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-yellow-700">
          <span className="mr-2">Dernière mise à jour:</span>29 Fév 2024
        </p>
        <p className="font-semibold text-green-600">
          <span className="mr-2">Status:</span>à jour
        </p>
      </div>
      <div className="flex flex-col gap-4 md:max-w-screen-md">
        <input
          type="search"
          placeholder="Recherche"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded border px-4 py-2 shadow"
        />
        <div className="flex flex-wrap items-center gap-4">
          <div className="space-x-2">
            <input
              type="radio"
              id="DN"
              value="Produit (Nom Commercial)"
              name="searchType"
              checked={searchType === "Produit (Nom Commercial)"}
              onChange={handleChangeSearchType}
            />
            <label htmlFor="DN">Nom commercial</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              id="DCI"
              value="DCI"
              name="searchType"
              checked={searchType === "DCI"}
              onChange={handleChangeSearchType}
            />
            <label htmlFor="DCI">DCI</label>
          </div>
        </div>
      </div>
      <p className="font-semibold text-yellow-700">
        Résultats: {result.length}
      </p>
      <div className="h-[300px]  overflow-scroll">
        <table className="w-full table-auto border-collapse border border-slate-400 bg-slate-50">
          <caption className="mb-4 caption-top text-xl font-bold text-slate-400">
            Liste complète des médicaments couverts pour les patients atteints
            de cancer
          </caption>
          <thead className="bg-slate-200">
            <tr>
              <th className="border border-slate-300 p-2">Nom commercial</th>
              <th className="border border-slate-300 p-2">DCI</th>
              <th className="border border-slate-300 p-2">Dosage</th>
              <th className="border border-slate-300 p-2">Unité</th>
              <th className="border border-slate-300 p-2">Conditionnement</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 ? (
              result.map((el, index) => (
                <tr key={index}>
                  <td className="border border-slate-300 p-2">
                    {el["Produit (Nom Commercial)"]}
                  </td>
                  <td className="border border-slate-300 p-2">{el["DCI"]}</td>
                  <td className="border border-slate-300 p-2">
                    {el["Dosage"]}
                  </td>
                  <td className="border border-slate-300 p-2">{el["Unité"]}</td>
                  <td className="border border-slate-300 p-2">{el["Cond,"]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2">
                  Votre recherche n'a donné aucun résultat. Veuillez vérifier
                  que vous avez correctement saisi le nom du médicament
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default Main;
