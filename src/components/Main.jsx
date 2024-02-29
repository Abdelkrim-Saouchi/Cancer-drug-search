import { useState } from 'react';
import data from '../data/data.js'
import { useEffect } from 'react';

const Main = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState('DCI');
  
  const handleChangeSearchtype = (e) => {
    setSearchType(e.target.value);
  }

  useEffect(()=>{
    const list = data.list1;
    const result = list.filter(el => el[searchType].toLowerCase().includes(query.toLowerCase()));
    setResult(result)
  }, [query, searchType])

  return <main className="px-4 py-3 space-y-4 bg-[#f8fef3] pb-8">
    <div className='p-3 bg-yellow-400 text-gray-700 md:max-w-md rounded-md shadow'>
      <p className='font-bold'>Notes importantes:</p>
      <ul className='list-disc list-inside'>
        <li>Veuillez vérifier attentivement le nom du médicament. Parfois, une faute de frappe peut entraîner une légère modification du nom. Par exemple : acide fucidique &#8594; acide fusidique</li>
        <li>Veuillez me contacter si une mise à jour de la liste des médicaments a été annoncée.</li>
      </ul>
    </div>
    <div>
      <p className='text-yellow-700 font-semibold'><span className='mr-2'>Dernière mise à jour:</span>29 Fév 2024</p>
      <p className='text-green-600 font-semibold'><span className='mr-2'>Status:</span>à jour</p>
    </div>
    <div className="flex flex-col gap-4 md:max-w-screen-md">
    <input type="search" placeholder="Recherche" value={query} onChange={(e)=> setQuery(e.target.value)} className="border rounded shadow px-4 py-2"/>
      <div className="flex items-center flex-wrap gap-4">
        <div className="space-x-2">
          <input type="radio" id="DN" value="Produit (Nom Commercial)" name="searchType" checked={searchType === "Produit (Nom Commercial)"} onChange={handleChangeSearchtype}/>
          <label htmlFor="DN">Nom commercial</label>
        </div>
        <div className="space-x-2">
          <input type="radio" id="DCI" value="DCI" name="searchType" checked={searchType === "DCI"} onChange={handleChangeSearchtype}/>
          <label htmlFor="DCI">DCI</label>
        </div>
      </div>
    </div>
    <div className='overflow-scroll  h-[300px]'>
    <table className='table-auto border border-slate-400 bg-slate-50 border-collapse w-full'>
      <caption className='caption-top font-bold text-xl text-slate-400 mb-4'>Liste complète des médicaments couverts pour les patients atteints de cancer</caption>
      <thead className='bg-slate-200'>
        <tr>
        <th className='border border-slate-300 p-2'>Nom commercial</th>
        <th className='border border-slate-300 p-2'>DCI</th>
        <th className='border border-slate-300 p-2'>Dosage</th>
        <th className='border border-slate-300 p-2'>Unité</th>
        <th className='border border-slate-300 p-2'>Conditionnement</th>
        </tr>
      </thead>
      <tbody>
        {result.length > 0 ? result.map((el, index) =>
        (<tr key={index}>
          <td className='border border-slate-300 p-2'>{el["Produit (Nom Commercial)"]}</td>
          <td className='border border-slate-300 p-2'>{el['DCI']}</td>
          <td className='border border-slate-300 p-2'>{el["Dosage"]}</td>
          <td className='border border-slate-300 p-2'>{el['Unité']}</td>
          <td className='border border-slate-300 p-2'>{el["Cond,"]}</td>
        </tr>)): (<tr>
              <td colSpan="5" className='p-2'>
              Votre recherche n'a donné aucun résultat. Veuillez vérifier que vous avez correctement saisi le nom du médicament
              </td>
            </tr>)}
      </tbody>
    </table>
    </div>
  </main>
}
export default Main;
