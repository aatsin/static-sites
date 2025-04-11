import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [emailCount, setEmailCount] = useState({});
  const [totalGuests, setTotalGuests] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');  

  useEffect(() => {
    fetch('http://localhost/static-sites/undiapersempre/php/getDataForms.php', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (!Array.isArray(data)) {
          throw new Error(data.message || 'Error desconocido');
        }

        const uniqueEmail = {};
        const countMap = {};
        let totalCount = 0;

        data.forEach((item) => {
          countMap[item.email] = (countMap[item.email] || 0) + 1;
          totalCount++;

          const existingEmail = uniqueEmail[item.email];
          if (!existingEmail || item.id < existingEmail.id) {
            uniqueEmail[item.email] = item;
          }
        });

        setResponses(Object.values(uniqueEmail));
        setEmailCount(countMap);
        setTotalGuests(totalCount);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
        setLoading(false);

        if (error.message === 'Unauthorized') {
          setErrorMsg('No tens accés. Si us plau, inicia sessió.');
        } else {
          setErrorMsg('Hi ha hagut un error carregant les dades.');
        }
      });
  }, []);

  if (errorMsg) {
    return (
      <div className="text-center text-red-500 text-lg mt-10">
        {errorMsg}
        <br />
        <Link to="/login" className="text-blue-500 hover:text-blue-700">Inicia sessió</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl lg:text-4xl xl:text-3xl font-serif text-gatsby-gold-400 tracking-[0.1em] mb-4 text-center">
        Llista d'Assistents
      </h1>
      <h2 className="text-xl font-serif text-gatsby-gold-400 tracking-[0.1em] mb-14 text-center">
        Total Invitats: {totalGuests}
      </h2>
      <div className="space-y-6">
        {responses.map((response) => (
          <div key={response.id} className="font-serif border-b border-gatsby-gold-200 pb-4">
            <Link to={`/admin/${encodeURIComponent(response.email)}`} className="text-xl text-center text-gatsby-gold-500 hover:text-gatsby-gold-300">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div><span className="font-bold ">Nom:</span> {response.name} {response.surname}</div>
                <div><span className="font-bold ">Telèfon:</span> {response.phone}</div>
                <div><span className="font-bold ">Email:</span> {response.email}</div>
                <div><span className="font-bold ">Persones:</span> {emailCount[response.email] || 1}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormResponses;
