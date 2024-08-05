import React, { useState, useEffect } from "react";

const App = () => {
  const [akhir, awal] = useState(0);
  const [nama, setNama] = useState("");

  useEffect(() => {
    if (akhir === 1) {
      setNama("Jihan");
    } else {
      setNama("Nubi");
    }
  }, [akhir]);

  return (
    <>
      <h5>Nama Pacar saya : {nama}</h5>
      <h1>Saya memiliki : {akhir} pacar</h1>
      <button onClick={() => awal((x) => x + 1)}>Tambah Pacar</button>
      <div></div>
      <button
        onClick={() =>
          awal((x) => {
            if (x > 0) {
              return x - 1;
            } else {
              return (x = 0);
            }
          })
        }
      >
        Putusin Pacar
      </button>
    </>
  );
};

export default App;
