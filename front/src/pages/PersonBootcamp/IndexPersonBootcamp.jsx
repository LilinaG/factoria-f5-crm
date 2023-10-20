import { useState, useEffect } from 'react';
import TableAtom from '../../components/atoms/TableAtom';
import BootcampDataService from './../../services/crmService/bootcamp.service';
import selection from "../../assets/img/selection.jpg";
import CardAtom from "../../components/atoms/CardAtom";


export default function IndexPersonBootcamp() {
  const [bootcamp, setBootcamp] = useState([]);
  
  const BootcampOptions = {
    1: 'FemCoders Norte',
    2: 'Digital Academy',
    3: 'UNIC',
  };

  const columns = ['Nombre', 'Apellidos', 'email', 'Teléfono', 'Bootcamp'];

  useEffect(() => {
    BootcampDataService.getAll()
      .then((response) => {
        setBootcamp(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al mostrar los Aspirantes por Bootcamps", error);
      });
  }, []);



  const currentDate = new Date();

  const nextBootcamps = bootcamp.filter((bootcamp) => {
    const eventDate = new Date(bootcamp.startDate);
    return eventDate >= currentDate;
  });

  const previousBootcamps = bootcamp.filter((bootcamp) => {
    const eventDate = new Date(bootcamp.endDate);
    return eventDate < currentDate;
  });

  // Mapear las jornadas pasadas
  const formattedPreviousBootcamps = previousBootcamps.map((bootcamp) => {
    return {
      'Bootcamp': bootcamp.name,
      'Inicio': new Date(bootcamp.startDate).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      'Aspirantes': bootcamp.person_id,
      
    };
  });

  return (
    <div className='md:block md:fixed md:top-[107px] md:left-64 md:right-0 w-auto p-2'>
      <div className="flex flex-col items-center">
       
        <div className="max-w-screen-lg flex justify-center gap-4 mt-4">
          {nextBootcamps.map((bootcamp, id) => {
            const formattedDate = new Date(bootcamp.startDate).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            });


            return (
              <CardAtom
                key={id}
                name={bootcamp.name}
                imageUrl={selection}
                stats={[
                  { label: "Fecha", value: formattedDate },
                  
                ]}
                buttonText="Ver Aspirantes"
                buttonLink={`/recruitment/personbybootcamp/${bootcamp.id}`}
                
                style={{ width: "20%" }}
                >
                </CardAtom>
            );
          })}
        </div>
      </div>
          
      {/* Tabla con jornadas anteriores */}
      <TableAtom
        tableTitle="Bootcamps"
        data={formattedPreviousBootcamps}
        columns={columns}
      />

    </div>
  );
}